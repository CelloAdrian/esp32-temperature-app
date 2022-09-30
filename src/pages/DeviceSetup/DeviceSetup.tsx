import React, { useState, useRef } from "react";
import Animated from "react-native-reanimated";
import { VStack, Flex, Text, Input, Icon, Pressable } from "native-base";
import { FlatList } from "react-native-gesture-handler";
// https://gorhom.github.io/react-native-bottom-sheet/troubleshooting/#adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import DeviceSetupSlides from "./DeviceSetupSlides";
import DeviceSetupItem from "./DeviceSetupItem";
import Paginator from "../../components/Paginator";
import Button from "../../components/Button";

const DeviceSetup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  let buttonText: string = "next";

  return (
    <Flex flex={1} justifyContent="center" backgroundColor="#F7F7F7">
      <VStack space={10} justifyContent="center" alignItems="center">
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
                                  showPassword ? "visibility" : "visibility-off"
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
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          // create unique keyExtractor
          // https://stackoverflow.com/questions/57120942/react-native-flatlist-images-flicker-when-list-state-updating
          keyExtractor={(item: any) => item.id + Math.random()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          initialScrollIndex={currentIndex}
        />
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
              buttonText={buttonText}
              iconName="right"
              iconSize={24}
              onPress={() => {
                // if (currentIndex < DeviceSetupSlides.length - 1) {
                //   // @ts-ignore
                //   slidesRef?.current?.scrollToIndex({
                //     index: currentIndex + 1,
                //   });
                //   console.log(buttonText);
                // }
                // // if on the last slide, change buttonText to finish
                // if (currentIndex === DeviceSetupSlides.length - 1) {
                //   buttonText = "finish";
                // }
                // navigate to the next slide, if on the last slide, change buttonText to finish
                buttonText =
                  currentIndex === DeviceSetupSlides.length - 1
                    ? "finish"
                    : "next";
                // @ts-ignore
                slidesRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
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
