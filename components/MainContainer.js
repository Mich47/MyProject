import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

import bgrImage from "../assets/images/background.jpg";
const BGR_IMAGE = Image.resolveAssetSource(bgrImage).uri;

export function MainContainer({ children, ...props }) {
  return (
    <View {...props} style={styles.container}>
      <ImageBackground style={styles.images} source={{ uri: BGR_IMAGE }}>
        {children}
      </ImageBackground>
    </View>
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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
