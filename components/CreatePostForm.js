import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";
import { Camera } from "./Camera";
import { InputCreatePost } from "./InputCreatePost";

import testPicture from "../assets/images/forest.jpg";
import { CardPicture } from "./CardPicture";
const DEFAULT_IMAGE = Image.resolveAssetSource(testPicture).uri;

export function CreatePostForm({ picture = null }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const isPicture = Boolean(picture);
  const isDisabled = name === "" || location === "";

  const handleSubmit = () => {
    console.log("FormData:", { name, location });
    setName("");
    setLocation("");
  };

  const handleClear = () => {
    setName("");
    setLocation("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.uploadPictureContainer}>
          <View style={styles.pictureContainer}>
            <CardPicture picture={picture} />
            <Camera isPicture={isPicture} />
          </View>
          <Text style={styles.text}>
            {isPicture ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </View>

        <InputCreatePost
          name={name}
          setName={setName}
          location={location}
          setLocation={setLocation}
        />

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.buttonSubmit,
              backgroundColor: isDisabled ? "#F6F6F6" : "#FF6C00",
            }}
            onPress={handleSubmit}
            disabled={isDisabled}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: isDisabled ? "#BDBDBD" : "#FFFFFF",
              }}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trashContainer}>
        <TouchableOpacity
          onPress={handleClear}
          activeOpacity={0.8}
          style={styles.trash}
        >
          {getIcon(ICONS_MAP.trash)}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: Dimensions.get("window").height - 96,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    gap: 64,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  uploadPictureContainer: {
    display: "flex",
    gap: 8,
  },
  pictureContainer: {
    position: "relative",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  buttonSubmit: {
    width: "100%",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#BDBDBD",
  },
  trashContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 8,
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
