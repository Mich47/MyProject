import { View, Text, StyleSheet } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 32,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
});
