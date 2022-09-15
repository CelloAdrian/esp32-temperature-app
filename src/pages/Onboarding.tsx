import { Flex, Spacer, Heading, Text, Pressable, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

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
        <Pressable
          width="full"
          backgroundColor={"#181818"}
          paddingX={50}
          paddingY={4}
          borderRadius={10}
        >
          <Flex direction="row" justifyContent="space-between">
            <Text fontSize="lg" color="#F7F7F7">
              login
            </Text>
            <AntDesign name="right" size={24} color="#F7F7F7" />
          </Flex>
        </Pressable>
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
