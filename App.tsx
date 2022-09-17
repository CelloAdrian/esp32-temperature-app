import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Onboarding from "./src/pages/Onboarding";
import Homescreen from "./src/pages/Homescreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        {/* <Onboarding /> */}
        <Homescreen />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
