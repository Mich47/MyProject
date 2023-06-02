import { ScrollView, View, StyleSheet } from "react-native";
import { UserCard } from "../../components/UserCard";
import { PostCard } from "../../components/PostCard";
import { useEffect, useState } from "react";

export const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  const newPost = route.params?.newPost ?? null;

  useEffect(() => {
    if (newPost) {
      setPosts((prev) => [...prev, newPost]);
    }
  }, [newPost]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <UserCard />
        {posts.map((post, index) => (
          <PostCard key={index} {...post} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
});
