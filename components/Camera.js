import { View, StyleSheet } from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";

export const Camera = ({ isPicture }) => {
  const icon = isPicture ? ICONS_MAP.cameraWhite : ICONS_MAP.camera;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isPicture ? " rgba(255, 255, 255, 0.3)" : "#fff",
      }}
    >
      {getIcon(icon)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});
