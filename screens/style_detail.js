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
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function DetailScreen(props) {
  const name = props.route.params.name;
  const imageUri = props.route.params.imageUri;

  const col = props.route.params.col;
  const [id, setId] = useState(null);
  const getIdFunction = () => {
    AsyncStorage.getItem("ID").then((value) => setId(value));
  };
  useEffect(getIdFunction, []);
  const ImageSet = {
    ARCANE: {
      main: require("../assets/arcane/refer.png"),
      result: [
        require("../assets/arcane/result/result_1.jpg"),
        require("../assets/arcane/result/result_2.jpg"),
      ],
    },
    ART: {
      main: require("../assets/art/refer.png"),
      result: [
        require("../assets/art/result/result_1.jpg"),
        require("../assets/art/result/result_2.jpg"),
      ],
    },
    침착맨: {
      main: require("../assets/calmdown/refer.jpg"),
      result: [
        require("../assets/calmdown/result/result_1.jpg"),
        require("../assets/calmdown/result/result_2.jpg"),
      ],
    },
    DISNEY: {
      main: require("../assets/disney/refer.jpg"),
      result: [
        require("../assets/disney/result/result_1.jpg"),
        require("../assets/disney/result/result_2.jpg"),
      ],
    },

    프리드로우: {
      main: require("../assets/freedraw/refer.jpg"),
      result: [
        require("../assets/freedraw/result/result_1.png"),
        require("../assets/freedraw/result/result_2.png"),
      ],
    },

    이태원클라쓰: {
      main: require("../assets/itaewonclass/refer.png"),
      result: [
        require("../assets/itaewonclass/result/result_1.jpg"),
        require("../assets/itaewonclass/result/result_2.jpg"),
      ],
    },
    JOJO: {
      main: require("../assets/jojo/refer.png"),
      result: [
        require("../assets/jojo/result/result_1.jpg"),
        require("../assets/jojo/result/result_2.jpg"),
      ],
    },
    SKETCH: {
      main: require("../assets/sketch/refer.png"),
      result: [
        require("../assets/sketch/result/result_1.jpg"),
        require("../assets/sketch/result/result_2.jpg"),
      ],
    },

    // 외모지상주의: {
    //   main: require("../assets/lookism/refer.jpg"),
    //   result: [
    //     require("../assets/lookism/result/result_1.jpg"),
    //     require("../assets/lookism/result/result_2.jpg"),
    //   ],
    // },

    여신강림: {
      main: require("../assets/truebeauty/refer.jpg"),
      result: [
        require("../assets/truebeauty/result/result_1.jpg"),
        require("../assets/truebeauty/result/result_2.jpg"),
      ],
    },

    INPUT: [require("../assets/input_1.jpg"), require("../assets/input_2.jpg")],
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
              {ImageSet["INPUT"].map((char_img, index) => {
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
              onPress={() => {
                props.navigation.reset({
                  routes: [
                    {
                      name: "Result",
                      params: {
                        style: name,
                        imageUri: imageUri,
                        id: id,
                        col: col,
                      },
                    },
                  ],
                });
              }}
            >
              <LinearGradient
                style={styles.uploadButton}
                colors={["#546DF2", "#A154F2"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
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
              </LinearGradient>
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
