import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";

import bgrImage from "./assets/images/background.jpg";
import LoginScreen from "./Screens/LoginScreen";
import { useState } from "react";
const BGR_IMAGE = Image.resolveAssetSource(bgrImage).uri;

export default function App() {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.images} source={{ uri: BGR_IMAGE }}>
          {isLoginScreen ? (
            <LoginScreen setIsLoginScreen={setIsLoginScreen} />
          ) : (
            <RegistrationScreen setIsLoginScreen={setIsLoginScreen} />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  images: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
