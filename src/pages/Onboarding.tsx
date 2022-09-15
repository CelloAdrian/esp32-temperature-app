import { Flex, Spacer, Heading, Text, Pressable, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";

import SmartHomeIllustration from "../illustrations/SmartHome.svg";

const Onboarding = () => {
  //   justifyContent="center"
  //   alignItems="center"
  //   padding={50}
  //   height="full"
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
        <Heading fontSize="4xl">Welcome</Heading>
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
        <Button buttonText="login" iconName="right" iconSize={24} />
        <Flex direction="row">
          <Text fontSize="lg">Don't have an account? </Text>
          <Pressable>
            <Text fontSize="lg" bold>
              Sign up
            </Text>
          </Pressable>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Onboarding;
