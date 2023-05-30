import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Camera } from "../../components/Camera";
import { useState } from "react";
import { InputLocation } from "../../components/InputLocation";
import { Input } from "../../components/Input";
import { CreatePostForm } from "../../components/CreatePostForm";

export const CreatePostsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <CreatePostForm />
    </ScrollView>
  );
};

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
    gap: 16,
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
});
