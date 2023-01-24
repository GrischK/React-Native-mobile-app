import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CameraScreen from "./screens/CameraScreen";
import FeedScreen from "./screens/FeedScreen";
import ImageScreen from "./screens/ImageSreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Camera") {
              iconName = focused ? "camera-outline" : "camera-outline";
            } else if (route.name === "Feed") {
              iconName = focused
                ? "share-social-outline"
                : "share-social-outline";
            } else if (route.name === "Image") {
              iconName = focused ? "images-outline" : "images-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
