import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";

export function InputLocation({ location, setLocation }) {
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
        value={location}
        placeholderTextColor="#bdbdbd"
        onChangeText={(text) => setLocation(text)}
      />
      <View style={styles.iconContainer}>{getIcon(ICONS_MAP.mapPin)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  input: {
    fontFamily: "Roboto-Regular",
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
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
