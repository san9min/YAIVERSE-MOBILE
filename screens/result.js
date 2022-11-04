import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { FontAwesome, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { API_URL } from "../config/constant";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import AnimatedSplash from "react-native-animated-splash-screen";

export default function ResultScreen(props) {
  const imageUri = props.route.params.imageUri;
  const style = props.route.params.style;
  const id = props.route.params.id;
  const [resultImage, setresultImage] = useState(null);
  const [ok, setOk] = useState(false);
  const [request, setRequest] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const fileUri = FileSystem.documentDirectory + "myFile.png";
  const getPermissions = async () => {
    const { status, canAskAgain } = await MediaLibrary.getPermissionsAsync();

    if (status === "undetermined" && canAskAgain) {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "undetermined") {
        setOk(true);
      }
    } else if (status !== "undetermined") {
      setOk(true);
    }
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append("style", style);
    formData.append("id", id);
    formData.append("file", {
      uri: imageUri,
      type: "image/",
      name: "originalImage.png",
    });
    axios
      .post(`${API_URL}/file/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        setresultImage(result.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
        alert("사진 변환에 실패했습니다.");
        props.navigation.reset({
          routes: [
            {
              name: "Tab",
            },
          ],
        });
      });
  }, [request]);

  return (
    <View style={styles.container}>
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require("../assets/loading2.png")}
        backgroundColor={"#192734"}
        logoHeight={150}
        logoWidth={150}
      >
        <View>
          <View style={styles.title}>
            <Text style={styles.titletext}>결과물</Text>
          </View>
          {resultImage && (
            <View>
              <View
                style={{
                  width: windowWidth,
                  height: windowWidth,
                  borderWidth: 2,
                  borderColor: "black",
                }}
              >
                <Image
                  source={{ uri: `${API_URL}/file/${resultImage}/` }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={styles.buttonContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      props.navigation.reset({
                        routes: [
                          {
                            name: "Tab",
                          },
                        ],
                      });
                    }}
                  >
                    <Entypo name="home" size={32} color="grey" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                      getPermissions();
                      const downloadedFile = await FileSystem.downloadAsync(
                        `${API_URL}/file/${resultImage}/`,
                        fileUri
                      );
                      const asset = await MediaLibrary.createAssetAsync(
                        downloadedFile["uri"]
                      );
                      const album = await MediaLibrary.createAlbumAsync(
                        "DownLoads",
                        asset
                      );
                      MediaLibrary.addAssetsToAlbumAsync(asset, album, false);
                      alert("야호", "다운성공");
                    }}
                  >
                    <FontAwesome name="download" size={32} color="grey" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setRequest(!request);
                    }}
                  >
                    <FontAwesome5 name="redo" size={32} color="grey" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </AnimatedSplash>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(24,24,24)",
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
  button: {
    margin: 50,
  },
});
