import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function InputPassword({ password, setPassword }) {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const inputFocusStyles = {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={
          isPasswordFocus
            ? { ...styles.input, paddingRight: 100, ...inputFocusStyles }
            : { ...styles.input, paddingRight: 100 }
        }
        placeholder="Пароль"
        value={password}
        placeholderTextColor="#bdbdbd"
        secureTextEntry={isPasswordSecured}
        onChangeText={(text) => setPassword(text)}
        onFocus={() => {
          setIsPasswordFocus(true);
        }}
        onBlur={() => {
          setIsPasswordFocus(false);
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonShowPass}
        onPress={() => setIsPasswordSecured(!isPasswordSecured)}
      >
        <Text style={styles.showPassText}>
          {isPasswordSecured ? "Показати" : "Сховати"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
