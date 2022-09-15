import { NativeBaseProvider } from "native-base";

import Onboarding from "./src/pages/Onboarding";

export default function App() {
  return (
    <NativeBaseProvider>
      <Onboarding />
    </NativeBaseProvider>
  );
}
