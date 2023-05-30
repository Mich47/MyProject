import { View, Text, Image, StyleSheet } from "react-native";

export const Comments = ({ commentsCount = 0 }) => {
  const icon =
    commentsCount > 0
      ? require("./img/message-circle.png")
      : require("./img/no-message.png");
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
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
  iconContainer: {
    width: 24,
    height: 24,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
