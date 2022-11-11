import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StylePreview from "../../components/stylepreview";

export default function ExampleScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  const [id, setId] = useState(null);
  const getIdFunction = () => {
    AsyncStorage.getItem("ID").then((value) => setId(value));
  };
  useEffect(getIdFunction, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 24,
            color: "#546DF2",
            fontFamily: "Nunito_800ExtraBold",
          }}
        >
          STYLE
        </Text>
      </View>
      <View>
        {id == null ? (
          <Text style={{ color: "white", margin: 24 }}>
            여러가지 스타일로 당신만의 아바타를 만들어보세요!
          </Text>
        ) : (
          <Text style={{ color: "white", margin: 12, textAlign: "center" }}>
            여러가지 스타일로 {id}님만의 아바타를 만들어보세요!
          </Text>
        )}
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
              name="ARCANE"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />

            <StylePreview
              name="침착맨"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="외모지상주의"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="여신강림"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="이태원클라쓰"
              width={windowWidth}
              navigation={props.navigation}
              imageUri={null}
            />
            <StylePreview
              name="프리드로우"
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
    paddingTop: 48,
  },
  stylepreviewContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
