import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      alert("Please write your code");
    }
  };
  const getValueFunction = () => {
    AsyncStorage.getItem("ID").then((value) => setGetValue(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Image
          source={require("./assets/logoText.png")}
          style={{ resizeMode: "contain", width: 240, height: 150 }}
        />
        {/* <Text style={styles.title}>YAIVERSE</Text> */}
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.loginform}>
          <TextInput
            placeholder="Your Own Secret Code"
            style={styles.input}
            onChangeText={(data) => setTextInputValue(data)}
            value={textInputValue}
          />
          <Text style={{ color: "grey", textAlign: "center" }}>
            당신만의 코드를 입력해주세요
          </Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={saveValueFunction}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Go In
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(25, 39, 52)",
    flex: 1,
  },
  titleArea: {
    flex: 3,
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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  loginButtonContainer: {
    flex: 2,
  },
  loginButton: {
    backgroundColor: "dodgerblue",
    color: "white",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    margin: 36,
  },
});
