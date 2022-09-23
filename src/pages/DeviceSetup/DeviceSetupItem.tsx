import React from "react";
import { VStack, Flex, Heading, Text } from "native-base";
import { useWindowDimensions } from "react-native";

const DeviceSetupItem = ({ item, children }: any) => {
  const { width } = useWindowDimensions();

  return (
    <VStack width={width} padding={25} justifyContent="center" space={50}>
      <Flex alignItems="center">
        <Heading size="2xl">{item.title}</Heading>
        <Text fontSize="lg" textAlign="center">
          {item.description}
        </Text>
      </Flex>
      <Flex width="full">{children}</Flex>
    </VStack>
  );
};

export default DeviceSetupItem;
