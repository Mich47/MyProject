import { ScrollView, View, StyleSheet } from "react-native";
import { UserCard } from "../../components/UserCard";
import { PostCard } from "../../components/PostCard";

export const PostsScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <UserCard />
        <PostCard navigation={navigation} />
        <PostCard navigation={navigation} />
        <PostCard navigation={navigation} />
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
});
