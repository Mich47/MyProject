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
import { Button, TouchableOpacity, Image, Dimensions } from "react-native";
import { Location } from "./components/Location/Location";
import { ICONS_MAP, getIcon } from "./components/Icons/Icons";
import { View } from "react-native";

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
      <Tab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: "#b3b3b3",
            height: 64,
            paddingTop: 8,
            paddingBottom: 16,
            paddingHorizontal: Math.floor(Dimensions.get("window").width / 7.5),
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
            color: "#212121",
          },
          headerStyle: {
            // height: 64,

            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
            // backgroundColor: "red",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          },
        }}
      >
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: () => {
              return getIcon(ICONS_MAP.grid);
            },
            // headerLeft: () => (
            //   <TouchableOpacity
            //     onPress={() => {
            //       // console.log("navigation ", navigation);
            //       console.log("back");
            //       // navigation.goBack();
            //     }}
            //   >
            //     <Image
            //       style={{ width: 24, height: 24 }}
            //       source={require("./assets/images/arrow-left.png")}
            //     />
            //   </TouchableOpacity>
            // ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreatePostsScreen}
          options={{
            tabBarIcon: () => {
              return getIcon(ICONS_MAP.addWhite);
            },
            tabBarItemStyle: {
              width: 70,
              height: 40,
              backgroundColor: "#FF6C00",
              borderRadius: 20,
            },
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert("This is a button!")}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => {
              return getIcon(ICONS_MAP.user);
            },
          }}
        />
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
