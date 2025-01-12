import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { Foundation, Octicons, AntDesign } from "@expo/vector-icons";
import { API_URL } from "../config/constant";
import { LinearGradient } from "expo-linear-gradient";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export default function ResultScreen(props) {
  const height = Dimensions.get("window").height;
  const imageUri = props.route.params.imageUri;
  const style = props.route.params.style;
  const id = props.route.params.id;

  const [imageCol, setImageCol] = useState(null);
  const [ok, setOk] = useState(false);
  const [first, setFirst] = useState(true);
  const [col, setCol] = useState(props.route.params.col);

  //reTry
  const [request, setRequest] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const windowWidth = Dimensions.get("window").width;
  const fileUri = FileSystem.documentDirectory + "myFile.png";
  const getPermissions = async () => {
    const { status, canAskAgain } = await MediaLibrary.getPermissionsAsync();
    if (status === "denied" && canAskAgain) {
      const { approval } = await MediaLibrary.requestPermissionsAsync();
    }
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
    setImageCol(null);
    if (first) {
      setFirst(false);

      if (col !== null) {
        const formData = new FormData();
        formData.append("style", style);
        axios
          .post(`${API_URL}/file/${col}/`, formData)
          .then((result) => {
            console.log(result.data);
            setImageCol(result.data.image_col);
            setCol(result.data.col);
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
      } else {
        const formData = new FormData();
        formData.append("style", style);
        formData.append("id", id);
        formData.append("file", {
          uri: imageUri,
          type: "image/png",
          name: "originalImage.png",
        });
        axios
          .post(`${API_URL}/file/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((result) => {
            setImageCol(result.data.image_col);
            setCol(result.data.col);
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
      }
    } else {
      axios
        .post(`${API_URL}/file/re/${imageCol}/`)
        .then((result) => {
          setImageCol(result.data.image_col);
          setCol(result.data.col);
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
    }
  }, [request]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <View style={styles.title}>
            <Text
              style={[styles.titletext, { fontFamily: "Nunito_800ExtraBold" }]}
            >
              {style} AVATAR
            </Text>
          </View>
          {!imageCol && (
            <View
              style={{
                height: height / 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#546DF2" />
            </View>
          )}

          {imageCol && (
            <View>
              <View
                style={{
                  width: windowWidth,
                  height: windowWidth,
                  borderColor: "grey",
                }}
              >
                <Image
                  source={{
                    uri: `${API_URL}/image/${imageCol}`,
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={styles.smallbutton}>
                  <TouchableOpacity
                    onPress={() => {
                      setRequest(!request);
                    }}
                  >
                    <AntDesign name="sync" size={24} color="#A154F2" />
                  </TouchableOpacity>
                </View>
                <LinearGradient
                  colors={["#546DF2", "#A154F2"]}
                  style={styles.bigbutton}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <TouchableOpacity
                    onPress={async () => {
                      getPermissions();
                      const downloadedFile = await FileSystem.downloadAsync(
                        `${API_URL}/image/${imageCol}`,
                        fileUri
                      );
                      const asset = await MediaLibrary.createAssetAsync(
                        downloadedFile["uri"]
                      );

                      const album = await MediaLibrary.createAlbumAsync(
                        "DownLoads",
                        asset
                      );

                      await MediaLibrary.addAssetsToAlbumAsync(
                        asset,
                        album,
                        false
                      );
                      setModalVisible(true);
                    }}
                  >
                    <Octicons name="download" size={36} color="white" />
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                          저장이 완료되었습니다.
                        </Text>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Text style={styles.textStyle}>확인</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
                </LinearGradient>
                <View style={styles.smallbutton}>
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
                    <Foundation name="home" size={24} color="#A154F2" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("StyleChoose", {
                      image: imageUri,
                      col: col,
                    });
                  }}
                >
                  <LinearGradient
                    colors={["#546DF2", "#A154F2"]}
                    style={styles.anotherButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                        fontFamily: "Nunito_800ExtraBold",
                      }}
                    >
                      Another Style
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(24,24,24)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgb(24,24,24)",
    padding: 12,
    marginTop: 24,
  },
  titletext: {
    color: "#A154F2",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  smallbutton: {
    width: 60,
    height: 60,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "#A154F2",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  bigbutton: {
    width: 84,
    height: 84,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    marginBottom: 8,
    textAlign: "center",
  },
  textStyle: {
    marginTop: 24,
    fontWeight: "bold",
  },
  anotherButton: {
    backgroundColor: "#546DF2",
    color: "white",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 48,
  },
});
