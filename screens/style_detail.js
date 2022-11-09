import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Character from "../components/character";
import { FontAwesome } from "@expo/vector-icons";

export default function DetailScreen(props) {
  const name = props.route.params.name;
  const imageUri = props.route.params.imageUri;
  const [id, setId] = useState(null);
  const getIdFunction = () => {
    AsyncStorage.getItem("ID").then((value) => setId(value));
  };
  useEffect(getIdFunction, []);
  const ImageSet = {
    JOJO: {
      main: require("../assets/jojo/refer.png"),
      input: [require("../assets/jojo/input/input_1.jpg")],
      result: [require("../assets/jojo/result/result_1.jpg")],
    },
    DISNEY: {
      main: require("../assets/disney/refer.jpg"),
      input: [require("../assets/disney/input/input_1.jpg")],
      result: [require("../assets/disney/result/result_1.jpg")],
    },
    SKETCH: {
      main: require("../assets/sketch/refer.png"),
      input: [require("../assets/sketch/input/input_1.jpg")],
      result: [require("../assets/sketch/result/result_1.jpg")],
    },
    ART: {
      main: require("../assets/art/refer.png"),
      input: [require("../assets/art/input/input_1.jpg")],
      result: [require("../assets/art/result/result_1.jpg")],
    },

    JINX: {
      main: require("../assets/jinx/refer.png"),
      input: [require("../assets/jinx/input/input_1.jpg")],
      result: [require("../assets/jinx/result/result_1.jpg")],
    },
    CAITLYN: {
      main: require("../assets/caitlyn/refer.png"),
      input: [require("../assets/disney/input/input_1.jpg")],
      result: [require("../assets/disney/result/result_1.jpg")],
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={ImageSet[name]["main"]} style={styles.bannerImage} />
      </View>
      <Text
        style={{
          color: "white",
          margin: 20,
          fontSize: 24,
          textAlign: "center",
          fontFamily: "Nunito_800ExtraBold",
        }}
      >
        {name}
      </Text>
      {!imageUri && (
        <ScrollView>
          <View style={styles.exampleContainer}>
            <View style={styles.exampleImage}>
              {ImageSet[name]["input"].map((char_img, index) => {
                return <Character character_image={char_img} key={index} />;
              })}
            </View>
            <View style={styles.arrow}>
              <FontAwesome name="arrow-right" size={24} color="white" />
            </View>
            <View style={styles.exampleImage}>
              {ImageSet[name]["result"].map((char_img, index) => {
                return <Character character_image={char_img} key={index} />;
              })}
            </View>
          </View>
        </ScrollView>
      )}
      {imageUri && (
        <View>
          <View style={styles.exampleContainer}>
            <View style={styles.exampleImage}>
              <Image
                source={{ uri: imageUri }}
                style={{
                  resizeMode: "cover",
                  width: 100,
                  height: 100,
                  borderRadius: 70,
                  overflow: "hidden",
                  margin: 10,
                }}
              />
            </View>
            <View style={styles.arrow}>
              <FontAwesome name="arrow-right" size={24} color="white" />
            </View>
            <View style={styles.exampleImage}>
              <FontAwesome name="question-circle" size={120} color="grey" />
            </View>
          </View>

          <View style={styles.uploadButtonContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => {
                props.navigation.reset({
                  routes: [
                    {
                      name: "Result",
                      params: { style: name, imageUri: imageUri, id: id },
                    },
                  ],
                });
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Nunito_800ExtraBold",
                }}
              >
                Generate your own Avatar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(24,24,24)",
    flex: 1,
    paddingTop: 48,
  },

  bannerImage: {
    width: "100%",
    height: 200,
  },
  exampleContainer: {
    flexDirection: "row",
  },
  exampleImage: {
    flex: 1,
    alignItems: "center",
  },
  arrow: {
    justifyContent: "center",
  },
  uploadButtonContainer: {
    justifyContent: "center",
    marginTop: 150,
  },
  uploadButton: {
    backgroundColor: "#546DF2",
    color: "white",
    alignItems: "center",
    padding: 8,
    margin: 32,
    borderRadius: 8,
  },
});
