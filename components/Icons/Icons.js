import { View, Image, StyleSheet } from "react-native";

const iconsMap = {
  add: require("./img/add.png"),
  addWhite: require("./img/add-white.png"),
  arrowLeft: require("./img/arrow-left.png"),
  arrowUp: require("./img/arrow-up.png"),
  camera: require("./img/camera.png"),
  cameraWhite: require("./img/camera-white.png"),
  grid: require("./img/grid.png"),
  logOut: require("./img/log-out.png"),
  mapPin: require("./img/map-pin.png"),
  message: require("./img/message-circle.png"),
  messageLight: require("./img/message-circle-light.png"),
  thumbsUp: require("./img/thumbs-up.png"),
  thumbsUpLight: require("./img/thumbs-up-light.png"),
  trash: require("./img/trash.png"),
  user: require("./img/user.png"),
  userWhite: require("./img/user-white.png"),
};

export const ICONS_MAP = {
  add: "add",
  addWhite: "addWhite",
  arrowLeft: "arrowLeft",
  arrowUp: "arrowUp",
  camera: "camera",
  cameraWhite: "cameraWhite",
  grid: "grid",
  logOut: "logOut",
  mapPin: "mapPin",
  message: "message",
  messageLight: "messageLight",
  thumbsUp: "thumbsUp",
  thumbsUpLight: "thumbsUpLight",
  trash: "trash",
  user: "user",
  userWhite: "userWhite",
};

export const getIcon = (name) => {
  const defaultIcon = ICONS_MAP.user;
  return (
    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={iconsMap[name] ?? iconsMap[defaultIcon]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});
