import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import StylePreview from "../../components/stylepreview";
import { API_URL } from "../../config/constant";

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
          <Text style={styles.titletext}>{id}</Text>
        )}
      </View>
      <View>
        {id != null && <Text style={{ color: "white" }}>{id} 님의 갤러리</Text>}
      </View>
      {imgkey && (
        <View>
          <View stlye={styles.boundary} />
          <ScrollView style={{ height: "100%" }}>
            <View style={styles.user_images}>
              {imgkey.map((key, index) => {
                return (
                  <Image
                    key={index}
                    source={{ uri: `${API_URL}/file/${key}/` }}
                    style={{
                      width: parseInt(windowWidth / 3),
                      height: parseInt(windowWidth / 3),
                      resizeMode: "contain",
                      borderColor: "black",
                      borderWidth: 1,
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
  },
  titletext: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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
