import { ScrollView, View, StyleSheet } from "react-native";
import { UserCard } from "../../components/UserCard";
import { PostCard } from "../../components/PostCard";

export const PostsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <UserCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </View>
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
});
