import React, { useState } from "react";
import {
  Flex,
  Heading,
  VStack,
  Text,
  Pressable,
  Input,
  Icon,
  Circle,
  HStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

const DeviceSetup = () => {
  const [showPassword, setShowPassword] = useState(false);

  interface Nav {
    navigate: (value: string) => void;
  }

  const { navigate } = useNavigation<Nav>();

  return (
    <VStack
      padding={10}
      space={20}
      height="full"
      justifyContent="center"
      alignItems="center"
    >
      <VStack justifyContent="center" alignItems="center" space={1}>
        <Heading size="2xl">Add a Device</Heading>
        <Flex direction="row">
          <Text fontSize="lg">
            Make sure that your device is turned on, connect your phone to the
            smart device's Wi-Fi access point, then click on next
          </Text>
        </Flex>
      </VStack>
      <Flex
        direction="row"
        width="full"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="row" flex={1} justifyContent="center" alignItems="center">
          <HStack space={2}>
            <Circle size="10px" bg="#D9D9D9" />
            <Circle size="10px" bg="#D9D9D9" />
          </HStack>
        </Flex>
        <Flex flex={1.5}>
          <Button
            buttonText="next"
            iconName="right"
            iconSize={24}
            onPress={() => {
              navigate("Homescreen");
            }}
          />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default DeviceSetup;
