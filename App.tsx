import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Onboarding from "./src/pages/Onboarding";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Onboarding />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
