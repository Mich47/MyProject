import RegistrationScreen from "./Screens/auth/RegistrationScreen";

import LoginScreen from "./Screens/auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostsScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";
import { View, TouchableOpacity, Dimensions } from "react-native";

import { ICONS_MAP, getIcon } from "./components/Icons/Icons";
import { useState } from "react";
import { CommentsScreen } from "./Screens/main/CommentsScreen";
import { MapScreen } from "./Screens/main/MapScreen";
import { LogoutButton } from "./components/LogoutButton";

export function Routes({ isAuth }) {
  const Tab = createBottomTabNavigator();
  const AuthStack = createStackNavigator();

  const [isUserTabActive, setIsUserTabActive] = useState(false);

  const toggleTabItems = (e) => {
    const { index } = e.data.state;

    if (index === 2 && isUserTabActive) {
      setIsUserTabActive(true);
      return;
    }
    if (index === 2) {
      setIsUserTabActive(!isUserTabActive);
      return;
    }
    setIsUserTabActive(false);
  };

  const headerRightBtn = () => (
    <View
      style={{
        position: "absolute",
        right: 8,
        bottom: 6,
      }}
    >
      <LogoutButton />
    </View>
  );

  const headerLeftBtn = (navigation) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        position: "absolute",
        bottom: 14,
        paddingHorizontal: 16,
      }}
    >
      {getIcon(ICONS_MAP.arrowLeft)}
    </TouchableOpacity>
  );

  return isAuth ? (
    <Tab.Navigator
      initialRouteName="Posts"
      screenListeners={{
        state: toggleTabItems,
      }}
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
          borderBottomWidth: 1,
          borderBottomColor: "#b3b3b3",
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Публікації",
            tabBarIcon: () => {
              return getIcon(ICONS_MAP.grid);
            },
            headerRight: () => headerRightBtn(navigation),
          };
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              navigation.jumpTo(isUserTabActive ? "Profile" : "Create");
              e.preventDefault();
            },
          };
        }}
        options={({ navigation }) => {
          return {
            headerTitle: "Створити публікацію",
            tabBarVisible: false,
            tabBarIcon: () => {
              return getIcon(
                isUserTabActive ? ICONS_MAP.userWhite : ICONS_MAP.addWhite
              );
            },
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              maxWidth: 70,
              height: 40,
              backgroundColor: "#FF6C00",
              borderRadius: 20,
            },

            headerLeft: () => headerLeftBtn(navigation),
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              navigation.jumpTo(isUserTabActive ? "Create" : "Profile");
              e.preventDefault();
            },
          };
        }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return getIcon(isUserTabActive ? ICONS_MAP.add : ICONS_MAP.user);
          },
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Коментарі",
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },

            headerLeft: () => headerLeftBtn(navigation),
          };
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Карта",
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },

            headerLeft: () => headerLeftBtn(navigation),
          };
        }}
      />
    </Tab.Navigator>
  ) : (
    <AuthStack.Navigator initialRouteName="Login">
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
    </AuthStack.Navigator>
  );
}
