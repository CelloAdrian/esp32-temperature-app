import { Flex, Heading, Text, Pressable, VStack } from "native-base";
import Button from "../components/Button";
import SignUp from "./SignUp";
import Login from "./Login";

import SmartHomeIllustration from "../assets/illustrations/SmartHome.svg";
import Handle from "../components/BottomSheet/BottomSheetHandle";
import { useMemo, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
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

const Onboarding = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["70%"], []);
  const handleOnPress = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <VStack
      height="full"
      justifyContent="center"
      alignItems="center"
      padding={50}
      space={10}
    >
      <SmartHomeIllustration width={290} height={250} />
      <Flex direction="column" justifyContent={"center"} alignItems={"center"}>
        <Heading size="2xl">Welcome</Heading>
        <Text fontSize="lg" textAlign="center">
          With just a few taps, managing smart devices has never been this
          easier
        </Text>
      </Flex>
      <VStack
        width="full"
        justifyContent="center"
        alignItems="center"
        space={5}
      >
        <Button
          buttonText="login"
          iconName="right"
          iconSize={24}
          onPress={() => {
            handleOnPress();
          }}
        />
        <Flex direction="row">
          <Text fontSize="lg">Don't have an account? </Text>
          <Pressable>
            <Text fontSize="lg" bold>
              Sign up
            </Text>
          </Pressable>
        </Flex>
      </VStack>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        handleComponent={Handle}
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
    </VStack>
  );
};

export default Onboarding;
