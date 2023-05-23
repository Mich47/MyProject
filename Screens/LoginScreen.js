import { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import { LoginForm } from "../components/LoginForm";

export default function LoginScreen({ setIsLoginScreen }) {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardShow(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardShow(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{
        ...styles.form,
        paddingTop: 32,
        paddingBottom: 144,
        marginBottom: isKeyboardShow ? -241 : 0,
      }}
    >
      <LoginForm setIsLoginScreen={setIsLoginScreen} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    // position: "absolute",
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
    paddingBottom: 68,
    gap: 32,
  },
});
