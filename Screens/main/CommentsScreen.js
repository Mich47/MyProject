import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { CardPicture } from "../../components/CardPicture";
import { CommentCard } from "../../components/CommentCard";
import { InputCreateComment } from "../../components/InputCreateComment";

export const CommentsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.commentContainer}>
          <CardPicture index={0} />
          <CommentCard index={1} />
          <CommentCard index={2} />
          <CommentCard index={3} />
        </View>
        <InputCreateComment />
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
