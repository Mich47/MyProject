import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InputPassword } from "../components/InputPassword";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { signInUser } from "../redux/auth/auth.operations";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(signInUser({ email, password })).unwrap();

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <>
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.container}>
        <Input
          key={"email"}
          value={email}
          setValue={setEmail}
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
        />
        <InputPassword password={password} setPassword={setPassword} />
      </View>

      <View style={{ ...styles.container, marginVertical: 10 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonSubmit}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.link}>Немає аккаунта? Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
