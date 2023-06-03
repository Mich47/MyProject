import "react-native-gesture-handler";
import { useFonts } from "expo-font";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Main } from "./components/Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
