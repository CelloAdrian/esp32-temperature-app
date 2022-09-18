import React, { useCallback, useMemo, useRef } from "react";
import { Flex, Heading, Text, Pressable, VStack } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import Button from "../components/Button";
import SignUp from "./SignUp";
import Login from "./Login";

import SmartHomeIllustration from "../assets/illustrations/SmartHome.svg";
import Handle from "../components/BottomSheet/BottomSheetHandle";

const Onboarding = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "70%"], []);

  const handleOnPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, []);

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
        <SignUp />
        {/* <Login /> */}
      </BottomSheet>
    </VStack>
  );
};

export default Onboarding;
