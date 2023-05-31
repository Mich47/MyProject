import { TouchableOpacity } from "react-native";

import { ICONS_MAP, getIcon } from "./Icons/Icons";

export const LogoutButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        console.log("logout");
      }}
      style={{ padding: 8 }}
    >
      {getIcon(ICONS_MAP.logOut)}
    </TouchableOpacity>
  );
};
