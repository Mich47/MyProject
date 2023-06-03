import { TouchableOpacity } from "react-native";

import { ICONS_MAP, getIcon } from "./Icons/Icons";
import { useDispatch } from "react-redux";
import { signOutUser } from "../redux/auth/auth.operations";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        dispatch(signOutUser());
      }}
      style={{ padding: 8 }}
    >
      {getIcon(ICONS_MAP.logOut)}
    </TouchableOpacity>
  );
};
