import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import StylePreview from "../components/stylepreview";

export default function StyleChooseScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const imageUri = props.route.params.image;
  const col = props.route.params.col;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUri }}
          style={{
            width: windowWidth,
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.styleSelector}>
        <View style={{ borderBottomColor: "white", borderBottomWidth: 1 }}>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              marginHorizontal: 12,
              fontFamily: "Nunito_800ExtraBold",
            }}
          >
            Choose a Style
          </Text>
        </View>
        <ScrollView>
          <View style={styles.stylepreviewContainer}>
            <StylePreview
              name="JOJO"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="DISNEY"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="SKETCH"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="ART"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="ARCANE"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="침착맨"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="외모지상주의"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="여신강림"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="이태원클라쓰"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
            <StylePreview
              name="프리드로우"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={imageUri}
              col={col}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgb(18,18,18)" },
  imageContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  styleSelector: {
    flex: 4,
    marginTop: 24,
  },
  styletext: {
    color: "white",
    fontSize: 12,
    marginLeft: 10,
  },
  stylepreviewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 12,
  },
});
