import { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegistrationScreen() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      // style={{ marginBottom: 38 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // style={{ ...styles.form, marginBottom: 38 }}
    >
      <View
        style={{ ...styles.form, paddingBottom: isKeyboardVisible ? 6 : 68 }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/background.jpg")}
          />
          <Image
            style={styles.imageAdd}
            source={require("../assets/images/add.png")}
          />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#bdbdbd"
              onFocus={() => setIsKeyboardVisible(true)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#bdbdbd"
              keyboardType="email-address"
              onFocus={() => setIsKeyboardVisible(true)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#bdbdbd"
              keyboardType="visible-password"
              secureTextEntry={true}
              onFocus={() => setIsKeyboardVisible(true)}
            />
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonShowPass}>
              <Text style={styles.showPassText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.container, marginVertical: 10 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonSubmit}
            onPress={() => setIsKeyboardVisible(false)}
          >
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity activeOpacity={0.8} style={styles.buttonSubmit}> */}
          <Text style={styles.loginLink}>Вже є аккаунт? Увійти</Text>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    // position: "relative",
    // left: 0,
    // right: 0,
    // bottom: 0,
    width: Dimensions.get("window").width,
    height: "auto",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 32,
  },
  imageContainer: {
    position: "relative",
    marginTop: -76,
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
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
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
  buttonShowPass: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: "100%",
    padding: 16,
    backgroundColor: "transparent",
  },
  showPassText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  buttonSubmit: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  loginLink: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
