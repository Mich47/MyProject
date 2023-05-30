import { View, Text, StyleSheet } from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";

export const Comments = ({ commentsCount = 0 }) => {
  const icon = commentsCount > 0 ? ICONS_MAP.message : ICONS_MAP.messageLight;
  return (
    <View style={styles.container}>
      {getIcon(icon)}
      <Text style={styles.text}>{commentsCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
