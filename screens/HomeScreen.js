import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <Text>HomeScreen</Text>
      <Button title = "settings"  onPress={navigation.navigate("Settings")} />
      </View>
      <StatusBar style="auto" />
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
