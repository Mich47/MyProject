import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { CardPicture } from "../../components/CardPicture";
import { CommentCard } from "../../components/CommentCard";
import { InputCreateComment } from "../../components/InputCreateComment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/posts/posts.operations";
import {
  selectComments,
  selectPostsStatus,
} from "../../redux/posts/posts.selectors";
import { STATUS } from "../../constants/status.constants";

export const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const dispatch = useDispatch();

  const comments = useSelector(selectComments);
  const status = useSelector(selectPostsStatus);

  useEffect(() => {
    (async () => {
      await dispatch(getComments(postId)).unwrap();
    })();
  }, [postId]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.commentContainer}>
          <CardPicture index={0} />
          {status !== STATUS.loading &&
            comments.map((comment, index) => (
              <CommentCard key={comment.id} index={index} comment={comment} />
            ))}
        </View>
        <InputCreateComment postId={postId} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height - 184,

    flex: 1,
    padding: 16,
    paddingTop: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 32,
  },
  commentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
});
