import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Comments } from "./Comments";
import { Location } from "./Location";

import testPicture from "../assets/images/forest.jpg";
import { CardPicture } from "./CardPicture";
const DEFAULT_IMAGE = Image.resolveAssetSource(testPicture).uri;

export const PostCard = ({
  navigation,
  picture = DEFAULT_IMAGE,
  title = "Ліс",
  commentsCount = 1,
  location = "Ukraine",
}) => {
  return (
    <View style={styles.cardContainer}>
      <CardPicture picture={picture} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Comments")}
        >
          <Comments commentsCount={commentsCount} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Map")}
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
