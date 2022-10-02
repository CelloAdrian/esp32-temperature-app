import React, { useRef, useState } from "react";
import { VStack, Flex, Input, Icon, Pressable } from "native-base";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import DeviceSetupSlides from "./DeviceSetupSlides";
import DeviceSetupItem from "./DeviceSetupItem";
import Paginator from "../../components/Paginator";
import Button from "../../components/Button";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native";

const DeviceSetup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  return (
    <Flex flex={1} justifyContent="center" background="#F7F7F7">
      <VStack space={10} justifyContent="center" alignItems="center">
        <NativeViewGestureHandler disallowInterruption>
          <AnimatedFlatList
            data={DeviceSetupSlides}
            renderItem={({ item, index }) => {
              if (index === 1) {
                return (
                  <DeviceSetupItem item={item}>
                    <VStack space={5}>
                      <Input
                        InputLeftElement={
                          <Icon
                            as={<AntDesign name="wifi" />}
                            size={5}
                            ml="2"
                            color="muted.400"
                          />
                        }
                        fontSize="lg"
                        placeholder="Wi-Fi Name"
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
                          <Pressable
                            onPress={() => setShowPassword(!showPassword)}
                          >
                            <Icon
                              as={
                                <MaterialIcons
                                  name={
                                    showPassword
                                      ? "visibility"
                                      : "visibility-off"
                                  }
                                />
                              }
                              size={5}
                              mr="2"
                              color="muted.400"
                            />
                          </Pressable>
                        }
                        fontSize="lg"
                        placeholder="Wi-Fi Password"
                      />
                    </VStack>
                  </DeviceSetupItem>
                );
              }
              return <DeviceSetupItem item={item} />;
            }}
            keyExtractor={(item: any) => item.id}
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
            bounces={false}
            horizontal
            pagingEnabled
            ref={slidesRef}
            scrollEventThrottle={32}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            initialScrollIndex={currentSlideIndex}
          />
        </NativeViewGestureHandler>
        <Flex
          direction="row"
          alignItems="center"
          paddingLeft={25}
          paddingRight={25}
        >
          <Flex flex={0.5}>
            <Paginator data={DeviceSetupSlides} scrollX={scrollX} />
          </Flex>
          <Flex flex={0.5}>
            <Button
              buttonText="next"
              iconName="right"
              iconSize={24}
              onPress={() => {
                let nextSlideIndex = currentSlideIndex + 1;
                if (nextSlideIndex > DeviceSetupSlides.length - 1) {
                  nextSlideIndex = 0;
                  scrollX.setValue(0);
                }
                setCurrentSlideIndex(nextSlideIndex);
                slidesRef?.current?.scrollToIndex({
                  index: nextSlideIndex,
                  animated: true,
                });
              }}
            />
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default DeviceSetup;
