import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "../../config/constant";
import ImageModal from "react-native-image-modal";

export default function UserScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const [id, setId] = useState(null);
  const getIdFunction = () => {
    AsyncStorage.getItem("ID").then((value) => setId(value));
  };
  const [imgkey, setImgKey] = useState(null);
  useEffect(getIdFunction, []);
  useEffect(() => {
    if (id != null) {
      axios
        .get(`${API_URL}/history/${id}`)
        .then((result) => {
          setImgKey(result.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {id == null ? (
          <Text>YAIverse</Text>
        ) : (
          <Text
            style={[styles.titletext, { fontFamily: "Nunito_800ExtraBold" }]}
          >
            {id}
          </Text>
        )}
      </View>
      <View>
        {id != null && (
          <Text
            style={{
              textAlign: "center",
              color: "white",
              margin: 20,
              fontSize: 24,
              fontFamily: "Nunito_800ExtraBold",
            }}
          ></Text>
        )}
      </View>
      {imgkey && (
        <View>
          <View stlye={styles.boundary} />
          <ScrollView style={{ height: "100%" }}>
            <View style={styles.user_images}>
              {imgkey.map((key, index) => {
                return (
                  <ImageModal
                    key={index}
                    resizeMode="contain"
                    imageBackgroundColor="#121212"
                    style={{
                      width: parseInt(windowWidth / 3),
                      height: parseInt(windowWidth / 3),
                      resizeMode: "contain",
                      borderColor: "black",
                      borderWidth: 1,
                    }}
                    source={{
                      uri: `${API_URL}/file/${key}/`,
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(18,18,18)",
  },
  user_images: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    justifyContent: "center",
    backgroundColor: "rgb(24,24,24)",
    padding: 12,
    paddingTop: 48,
  },

  titletext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    color: "#546DF2",
  },
  boundary: {
    borderBottomColor: "white",
  },
  stylepreviewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
});
