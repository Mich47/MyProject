import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";

import { Avatar } from "../../components/Avatar";

import { LogoutButton } from "../../components/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth.selectors";
import { useEffect } from "react";
import {
  selectPostsStatus,
  selectUserPosts,
} from "../../redux/posts/posts.selectors";
import { getUserPosts } from "../../redux/posts/posts.operations";
import { STATUS } from "../../constants/status.constants";

export const ProfileScreen = ({ navigation }) => {
  const { avatar, login, userId } = useSelector(selectUser);
  const userPosts = useSelector(selectUserPosts);
  const status = useSelector(selectPostsStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(userId));
  }, [userId, navigation]);

  return (
    <MainContainer>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoutContainer}>
            <LogoutButton />
          </View>
          <Avatar avatar={avatar} />
          <Text style={styles.title}>{login}</Text>
          {status !== STATUS.loading &&
            userPosts.map((post) => (
              <PostCard key={post.id} {...post} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "transparent",
  },
  container: {
    backgroundColor: "#fff",
    marginTop: 147,
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    display: "flex",
    minHeight: Dimensions.get("window").height - 211,
    gap: 32,
  },
  logoutContainer: {
    position: "absolute",
    top: 14,
    right: 8,
  },
  imageContainer: {
    marginTop: -92,
    marginHorizontal: (Dimensions.get("window").width - 152) / 2,
    textAlign: "center",
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  imageAdd: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});
