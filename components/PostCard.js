import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Comments } from "./Comments";
import { Likes } from "./Likes";
import { Location } from "./Location";
import { CardPicture } from "./CardPicture";

export const PostCard = ({
  navigation,
  picture,
  title,
  commentsCount,
  likesCount,
  location,
  coords,
  id: postId,
}) => {
  return (
    <View style={styles.cardContainer}>
      <CardPicture picture={picture} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <View style={{ ...styles.container, gap: 24 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Comments", { postId, picture })}
          >
            <Comments commentsCount={commentsCount} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              console.log("toggleLike");
            }}
          >
            <Likes likesCount={likesCount} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Map", { coords, title })}
        >
          <Location location={location} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    gap: 8,
  },
  imageContainer: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: Math.floor((Dimensions.get("window").width - 32) / 1.43),
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  textComment: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  textLocation: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
