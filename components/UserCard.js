import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/auth.selectors";

export const UserCard = () => {
  const { avatar, login, email } = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {avatar && (
          <Image
            style={styles.image}
            source={{
              uri: avatar,
            }}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLogin}>{login}</Text>
        <Text style={styles.textEmail}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  imageContainer: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    width: 60,
    height: 60,
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
  textContainer: {
    display: "flex",
    gap: 2,
  },
  textLogin: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
