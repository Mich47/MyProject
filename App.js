import "react-native-gesture-handler";
import { useFonts } from "expo-font";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";

import LoginScreen from "./Screens/auth/LoginScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostsScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";
import { Button, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const AuthStack = createStackNavigator();
  // const navigation = useNavigation();
  // console.log("navigation ", navigation);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Posts">
        <Tab.Screen
          options={{
            headerStyle: {
              // padding: 30,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  // console.log("navigation ", navigation);
                  console.log("back");
                  // navigation.goBack();
                }}
              >
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/images/arrow-left.png")}
                />
              </TouchableOpacity>
            ),
          }}
          name="Posts"
          component={PostsScreen}
        />
        <Tab.Screen
          options={{
            tabBarStyle: {
              // display: "none",
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
          name="Create"
          component={CreatePostsScreen}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      {/* <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}
