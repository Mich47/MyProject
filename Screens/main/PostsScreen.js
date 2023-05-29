import { Text, View, StyleSheet } from "react-native";
import { UserCard } from "../../components/UserCard";

export const PostsScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      <UserCard />
      {children}
    </View>
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
});
