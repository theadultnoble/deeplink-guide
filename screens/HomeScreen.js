import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <Button title = "settings"  onPress={navigation.navigate("Settings")} />
      <StatusBar style="auto" />
      <Text>HomeScreen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
