import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MainContainer } from "../../components/MainContainer";
import { PostCard } from "../../components/PostCard";

import { Avatar } from "../../components/Avatar";

import testPicture from "../../assets/images/forest.jpg";
import { LogoutButton } from "../../components/LogoutButton";
const DEFAULT_IMAGE = Image.resolveAssetSource(testPicture).uri;

export const ProfileScreen = ({ navigation }) => {
  const avatar = DEFAULT_IMAGE;
  const login = "Natali Romanova";

  return (
    <MainContainer>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoutContainer}>
            <LogoutButton />
          </View>
          <Avatar avatar={avatar} />
          <Text style={styles.title}>{login}</Text>
          <PostCard navigation={navigation} />
          <PostCard navigation={navigation} />
          <PostCard navigation={navigation} />
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
