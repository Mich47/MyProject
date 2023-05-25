import "react-native-gesture-handler";
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import bgrImage from "../assets/images/background.jpg";
const BGR_IMAGE = Image.resolveAssetSource(bgrImage).uri;

export function MainContainer({ children }) {
  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.images} source={{ uri: BGR_IMAGE }}>
          {children}
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
