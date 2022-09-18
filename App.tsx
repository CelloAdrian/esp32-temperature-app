import React, { useCallback, useMemo, useRef } from "react";
import { NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Onboarding from "./src/pages/Onboarding";
import Homescreen from "./src/pages/Homescreen";

import SignUp from "./src/pages/SignUp";
import Login from "./src/pages/Login";
import BottomSheet from "@gorhom/bottom-sheet";

const Stack = createNativeStackNavigator();

const BottomSheetNavigator = () => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerShown: false,
      safeAreaInsets: { top: 0 },
      cardStyle: {
        backgroundColor: "white",
        overflow: "visible",
      },
    }),
    []
  );

  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["70%"], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homescreen"
              component={Homescreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          animateOnMount
          enablePanDownToClose
          style={{
            // https://github.com/gorhom/react-native-bottom-sheet/issues/734#issuecomment-1150977998
            // https://10015.io/tools/react-native-shadow-generator
            backgroundColor: "rgba(255, 255, 255,0)",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 18,
            },
            shadowOpacity: 0.25,
            shadowRadius: 20.0,
            elevation: 24,
          }}
        >
          <BottomSheetNavigator />
        </BottomSheet>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
