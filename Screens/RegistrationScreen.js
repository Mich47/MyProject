import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/background.jpg")}
        />
        <Image
          style={styles.imageAdd}
          source={require("../assets/images/add.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor="#bdbdbd"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#bdbdbd"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#bdbdbd"
          keyboardType="visible-password"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    // width: 120,
    // height: 120,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  imageAdd: {
    width: 25,
    height: 25,
  },
  form: {
    position: "absolute",
    left: 0,
    // right: 0,
    bottom: 0,
    width: Dimensions.get("window").width,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // width: "100%",
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
  },
});
