import React, { useCallback, useMemo, useRef } from "react";
import { Flex, Heading, VStack, HStack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

import SettingsIcon from "../assets/icons/settings_1_line.svg";

const Homescreen = () => {
  return (
    <VStack
      height="full"
      // justifyContent="center"
      alignItems="center"
      padding={50}
      space={10}
    >
      <VStack width="full">
        <Heading size="2xl">Welcome</Heading>
        <Text fontSize="lg" color="muted.400">
          Manage your devices here
        </Text>
      </VStack>
      <VStack width="full" space={25}>
        <VStack width="full">
          <Flex direction="row" justifyContent="space-between" alignItems="center" width="full">
            <Text fontSize="2xl" bold>
              Devices
            </Text>
            <SettingsIcon width={32} height={32} />
          </Flex>
        </VStack>
        <VStack width="full" space={50}>
          <VStack backgroundColor="#181818" borderRadius={10} space={2} padding={5}>
            <HStack>
              <Feather name="thermometer" size={24} color="#F7F7F7" />
              <Text fontSize="lg" color="#F7F7F7">
                Temperature Sensor
              </Text>
            </HStack>
            <Flex direction="row" width="full" justifyContent="center" alignItems="center">
              <VStack flex={0.5} justifyContent="center" alignItems="center">
                <Text fontSize="3xl" color="#F7F7F7">
                  69°C
                </Text>
                <Text fontSize="lg" color="#F7F7F7">
                  Temperature
                </Text>
              </VStack>
              <VStack flex={0.5} justifyContent="center" alignItems="center">
                <Text fontSize="3xl" color="#F7F7F7">
                  69%
                </Text>
                <Text fontSize="lg" color="#F7F7F7">
                  Humidity
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Homescreen;
