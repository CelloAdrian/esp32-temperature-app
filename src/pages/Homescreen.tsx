import React, { useState, useEffect } from "react";
import { Flex, Heading, VStack, HStack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import * as Network from "expo-network";

import SettingsIcon from "../assets/icons/settings_1_line.svg";

const Homescreen = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [isTemperatureLoaded, setIsTemperatureLoaded] = useState<boolean>(false);
  const [isHumidityLoaded, setIsHumidityLoaded] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);

  const getIpAddress = async () => {
    const ip = await Network.getIpAddressAsync();
    setIpAddress(ip);
    console.log(ip);
  };

  const getTemperature = async () => {
    try {
      // fetch from ip address + route /temperature
      const response = await fetch(`http://${ipAddress}/temperature`);
      const data = await response.json();
      setTemperature(data.temperature);
      setIsTemperatureLoaded(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsTemperatureLoaded(true);
    }
  };

  const getHumidity = async () => {
    try {
      // fetch from ip address + route /humidity
      const response = await fetch(`http://${ipAddress}/humidity`);
      const data = await response.json();
      setHumidity(data.humidity);
      setIsHumidityLoaded(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsHumidityLoaded(true);
    }
  };

  useEffect(() => {
    // while get ip address is not finished, do not execute getTemperature and getHumidity
    while (!ipAddress) {
      getIpAddress();
    }
    getTemperature();
    getHumidity();
  }, []);

  return (
    <VStack
      height="full"
      alignItems="center"
      paddingX={50}
      paddingY={75}
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
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="full"
          >
            <Text fontSize="2xl" bold>
              Devices
            </Text>
            <SettingsIcon width={32} height={32} />
          </Flex>
        </VStack>
        <VStack width="full" space={50}>
          <VStack
            backgroundColor="#181818"
            borderRadius={10}
            space={2}
            padding={5}
          >
            <HStack space={1} alignItems="center">
              <Feather name="thermometer" size={24} color="#F7F7F7" />
              <Text fontSize="lg" color="#F7F7F7">
                Temperature Sensor
              </Text>
            </HStack>
            <Flex
              direction="row"
              width="full"
              justifyContent="center"
              alignItems="center"
            >
              <VStack flex={0.5} justifyContent="center" alignItems="center">
                <Text fontSize="3xl" color="#F7F7F7">
                  69°C
                </Text>
                <Text fontSize="md" color="#F7F7F7">
                  Temperature
                </Text>
              </VStack>
              <VStack flex={0.5} justifyContent="center" alignItems="center">
                <Text fontSize="3xl" color="#F7F7F7">
                  69%
                </Text>
                <Text fontSize="md" color="#F7F7F7">
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
