import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";
import testPicture from "../assets/images/forest.jpg";
import { Camera } from "./Camera";
const DEFAULT_IMAGE = Image.resolveAssetSource(testPicture).uri;

export function CreatePostForm({ picture = null }) {
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const isPicture = Boolean(picture);

  const inputFocusStyles = {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  };

  const handleSubmit = () => {
    console.log("FormData:", { name, location });
    setName("");
    setLocation("");
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 50,
        height: "100%",
      }}
    >
      <View style={styles.container}>
        <View style={styles.uploadPictureContainer}>
          <View style={styles.pictureContainer}>
            {isPicture && (
              <Image
                style={styles.picture}
                source={{
                  uri: picture,
                }}
              />
            )}
            <Camera isPicture={isPicture} />
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
        </View>
        <View
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={
                isNameFocus
                  ? {
                      ...styles.input,
                      fontFamily: "Roboto-Medium",
                      ...inputFocusStyles,
                    }
                  : { ...styles.input, fontFamily: "Roboto-Medium" }
              }
              placeholder="Назва..."
              value={name}
              placeholderTextColor="#bdbdbd"
              onChangeText={(text) => setName(text)}
              onFocus={() => {
                setIsNameFocus(true);
              }}
              onBlur={() => {
                setIsNameFocus(false);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={
                isLocationFocus
                  ? { ...styles.input, paddingLeft: 28, ...inputFocusStyles }
                  : { ...styles.input, paddingLeft: 28 }
              }
              placeholder="Місцевість..."
              value={location}
              placeholderTextColor="#bdbdbd"
              onChangeText={(text) => setLocation(text)}
              onFocus={() => {
                setIsLocationFocus(true);
              }}
              onBlur={() => {
                setIsLocationFocus(false);
              }}
            />
            <View style={styles.iconContainer}>
              {getIcon(ICONS_MAP.mapPin)}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonSubmit}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.trashContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.trash}>
          {getIcon(ICONS_MAP.trash)}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  uploadPictureContainer: {
    width: "100%",
    height: Math.floor((Dimensions.get("window").width - 32) / 1.43),
    display: "flex",
    gap: 8,
  },
  pictureContainer: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: "100%",
    borderRadius: 8,
    position: "relative",
  },
  picture: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    fontFamily: "Roboto-Regular",
    borderBottomWidth: 1,
    color: "#212121",
    borderColor: "#E8E8E8",
    paddingVertical: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  iconContainer: {
    position: "absolute",
    top: 18,
    left: 0,
  },
  buttonSubmit: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  trashContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  trash: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
