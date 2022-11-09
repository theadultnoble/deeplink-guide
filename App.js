import React from "react";
import {Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import * as Linking from "expo-linking";



export default function App() {
  const prefix = Linking.createURL("/");

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "home",
        Settings: "settings",
      },
    },
  };

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
