import { View, StyleSheet, Text, ScrollView } from "react-native";

export default function ManualScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ color: "white", margin: 20 }}>사용설명서</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(18,18,18)",
    flex: 1,
  },
});
