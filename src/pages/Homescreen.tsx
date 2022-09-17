import { Flex, Heading, VStack, Text } from "native-base";
import Button from "../components/Button";

import VoidIllustration from "../assets/illustrations/Void.svg";
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
        <Heading size="lg">Hi [name]</Heading>
        <Text fontSize="lg" color="muted.400">Manage your devices here</Text>
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
              console.log("test");
            }}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Homescreen;
