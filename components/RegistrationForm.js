import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InputPassword } from "../components/InputPassword";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";

export function RegistrationForm() {
  const [avatar, setAvatar] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("FormData:", { avatar, login, email, password });
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <View style={styles.imageContainer}>
        {avatar ? (
          <>
            <Image
              style={styles.image}
              source={{
                uri: avatar,
              }}
            />
            <Image
              style={styles.imageAdd}
              source={require("../assets/images/add.png")}
            />
          </>
        ) : (
          <Image
            style={{
              ...styles.imageAdd,
              ...{ transform: [{ rotate: "45deg" }] },
            }}
            source={require("../assets/images/remove.png")}
          />
        )}
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.container}>
        <Input
          key={"login"}
          value={login}
          setValue={setLogin}
          placeholder="Логін"
        />
        <Input
          key={"email"}
          value={email}
          setValue={setEmail}
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
        />
        <InputPassword password={password} setPassword={setPassword} />
      </View>
      {
        <View style={{ ...styles.container, marginVertical: 10 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonSubmit}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.link}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "Roboto-Medium",
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
  buttonSubmit: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  link: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
