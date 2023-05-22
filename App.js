import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";

import bgrImage from "./assets/images/background.jpg";
const BGR_IMAGE = Image.resolveAssetSource(bgrImage).uri;

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.images} source={{ uri: BGR_IMAGE }}>
        <Text>Open up</Text>
        <RegistrationScreen />
        <StatusBar style="auto" />
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
    justifyContent: "center",
    alignItems: "center",
  },
});
