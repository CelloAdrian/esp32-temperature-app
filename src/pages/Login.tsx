import React, { useState } from "react";
import {
  Flex,
  Heading,
  VStack,
  Text,
  Pressable,
  Input,
  Icon,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
import Button from "../components/Button";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <VStack padding={10} space={20}>
      <VStack justifyContent="center" alignItems="center" space={1}>
        <Heading size="2xl">Login</Heading>
        <Flex direction="row">
          <Text fontSize="lg">Don't have an account? </Text>
          <Pressable>
            <Text fontSize="lg" bold>
              Sign up
            </Text>
          </Pressable>
        </Flex>
      </VStack>
      <VStack space={5}>
        <Input
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          fontSize="lg"
          placeholder="Username"
        />
        <Input
          type={showPassword ? "text" : "password"}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="lock" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                as={
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          fontSize="lg"
          placeholder="Password"
        />
      </VStack>
      <Button
        buttonText="login"
        iconName="right"
        iconSize={24}
        onPress={() => {
          console.log("test");
        }}
      />
    </VStack>
  );
};

export default SignUp;