import React, { useCallback, useMemo, useRef } from "react";
import { Flex, Heading, VStack, Text } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import Button from "../components/Button";
import Handle from "../components/BottomSheet/BottomSheetHandle";
import DeviceSetup from "./DeviceSetup";

import VoidIllustration from "../assets/illustrations/Void.svg";
import SettingsIcon from "../assets/icons/settings_1_line.svg";

const Homescreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["70%"], []);

  const handleOnPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  return (
    <VStack
      height="full"
      // justifyContent="center"
      alignItems="center"
      padding={50}
      space={10}
    >
      <VStack width="full">
        <Heading size="lg">Hi [name]</Heading>
        <Text fontSize="lg" color="muted.400">
          Manage your devices here
        </Text>
      </VStack>
      <VStack width="full" space={25}>
        <VStack width="full">
          <Flex direction="row" justifyContent="space-between" width="full">
            <Text fontSize="lg" bold>
              Devices
            </Text>
            <SettingsIcon width={24} height={24} />
          </Flex>
        </VStack>
        <VStack width="full" space={50}>
          <VoidIllustration width={285} height={300} />
          <Button
            buttonText="add device"
            iconName="right"
            iconSize={24}
            onPress={() => {
              handleOnPress();
            }}
          />
        </VStack>
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
        <DeviceSetup />
      </BottomSheet>
    </VStack>
  );
};

export default Homescreen;
