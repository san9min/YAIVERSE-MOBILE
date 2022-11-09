import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen(props) {
  const [textInputValue, setTextInputValue] = useState("");
  // To set the value on Text
  const getValue = props.id;
  const setGetValue = props.setId;

  const saveValueFunction = () => {
    if (textInputValue) {
      AsyncStorage.setItem("ID", textInputValue);
      setTextInputValue("");
      getValueFunction();
    } else {
      alert("ID를 입력해주세요!");
    }
  };
  const getValueFunction = () => {
    AsyncStorage.getItem("ID").then((value) => setGetValue(value));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.topmargin}></View>
      </TouchableWithoutFeedback>
      <View style={styles.titleArea}>
        <Image
          source={require("./assets/logo.png")}
          style={{ resizeMode: "contain", width: 380, height: 380 }}
        />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.loginform}>
          <TextInput
            placeholder="   ID"
            placeholderTextColor="white"
            color="white"
            style={styles.input}
            onChangeText={(data) => setTextInputValue(data)}
            value={textInputValue}
          />
          <Text
            style={{
              color: "grey",
              textAlign: "center",
              margin: 12,
            }}
          >
            당신만의 코드를 입력해주세요
          </Text>

          <TouchableOpacity onPress={saveValueFunction}>
            <LinearGradient
              colors={["#546DF2", "#A154F2"]}
              style={styles.loginButton}
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
                LOGIN
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B192C",
    flex: 1,
  },
  topmargin: {
    flex: 3,
  },
  titleArea: {
    flex: 1,
    marginBottom: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    color: "white",
  },
  loginform: {
    flex: 5,
    padding: 12,
  },
  input: {
    height: 40,
    marginHorizontal: 36,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  loginButtonContainer: {
    flex: 2,
  },
  loginButton: {
    backgroundColor: "#546DF2",
    color: "white",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 36,
  },
});
