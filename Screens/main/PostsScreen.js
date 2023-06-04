import { ScrollView, View, StyleSheet } from "react-native";
import { UserCard } from "../../components/UserCard";
import { PostCard } from "../../components/PostCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../redux/posts/posts.selectors";
import { getPosts } from "../../redux/posts/posts.operations";

export const PostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [navigation]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <UserCard />
        {posts.map((post) => (
          <PostCard key={post.id} {...post} navigation={navigation} />
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
