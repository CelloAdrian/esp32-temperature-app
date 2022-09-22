import { VStack, Flex, Heading, Text } from "native-base";
import { useWindowDimensions } from "react-native";

const DeviceSetupItem = ({ item, children }: any) => {
  const { width } = useWindowDimensions();

  return (
    <VStack width={width}>
      <Heading size="2xl">{item.title}</Heading>
      <Text fontSize="lg">
        {item.description}
      </Text>
      <Flex>
        {children}
      </Flex>
    </VStack>
  );
};

export default DeviceSetupItem;
