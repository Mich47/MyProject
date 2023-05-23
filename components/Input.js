import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export function Input({
  value,
  setValue,
  placeholder = "",
  keyboardType = "default",
}) {
  const [isInputFocus, setIsInputFocus] = useState(false);

  const inputFocusStyles = {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={
          isInputFocus ? { ...styles.input, ...inputFocusStyles } : styles.input
        }
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#bdbdbd"
        keyboardType={keyboardType}
        onChangeText={(text) => setValue(text)}
        onFocus={() => {
          setIsInputFocus(true);
        }}
        onBlur={() => {
          setIsInputFocus(false);
        }}
      />
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
});
