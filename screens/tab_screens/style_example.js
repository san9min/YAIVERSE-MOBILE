import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import StylePreview from "../../components/stylepreview";

export default function ExampleScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}>스타일</Text>
      </View>
      <View>
        <Text style={{ color: "white" }}>다음과 같이 스타일을 바꿔보세요!</Text>
      </View>
      <View style={{ flex: 10 }}>
        <ScrollView>
          <View style={styles.stylepreviewContainer}>
            <StylePreview
              name="JOJO"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="DISNEY"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />

            <StylePreview
              name="SKETCH"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="ART"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />

            <StylePreview
              name="JINX"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="CAITLYN"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(18,18,18)",
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
  stylepreviewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
