import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { ICONS_MAP, getIcon } from "./Icons/Icons";
import { InputCreatePost } from "./InputCreatePost";

import { CameraIcon } from "./CameraIcon";
import { CardPicture } from "./CardPicture";

export function CreatePostForm({ navigation }) {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  const isPicture = Boolean(picture);
  const isDisabled = picture === "" || name === "" || location === "";

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View
        style={{
          ...styles.container,
          height: Dimensions.get("window").height - 97,
          paddingTop: Dimensions.get("window").height / 2 - 147,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 30,
            color: "#212121",
            textAlign: "center",
          }}
        >
          {"Нам потрібен ваш дозвіл, щоб показати камеру"}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonSubmit}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Надати дозвіл</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleClear = () => {
    setPicture("");
    setName("");
    setLocation("");
  };

  const handleSubmit = () => {
    console.log("FormData:", { picture, name, location });
    navigation.navigate("Posts", { newPost: { picture, name, location } });
    handleClear();
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPicture(uri);
      // await MediaLibrary.createAssetAsync(uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.uploadPictureContainer}>
          <View style={styles.pictureContainer}>
            {isPicture ? (
              <CardPicture picture={picture} />
            ) : (
              <Camera style={styles.camera} ref={setCameraRef}></Camera>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cameraBtn}
              onPress={() => {
                if (picture) {
                  setPicture("");
                  return;
                }
                takePhoto();
              }}
            >
              <CameraIcon isPicture={picture} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (picture) {
                setPicture("");
              }
            }}
          >
            <Text style={styles.text}>
              {picture ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </TouchableOpacity>
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
    minHeight: Dimensions.get("window").height - 97,
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
    width: "100%",
    height: Math.floor((Dimensions.get("window").width - 32) / 1.43),
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  cameraBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
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
