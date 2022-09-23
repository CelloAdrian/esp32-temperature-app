import React, { useState, useRef } from "react";
import Animated from "react-native-reanimated";
import { Flex, Text, Pressable } from "native-base";
import { FlatList } from "react-native-gesture-handler";
// https://gorhom.github.io/react-native-bottom-sheet/troubleshooting/#adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android
import DeviceSetupSlides from "./DeviceSetupSlides";
import DeviceSetupItem from "./DeviceSetupItem";
import Paginator from "../../components/Paginator";

const DeviceSetup = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <Flex>
      <AnimatedFlatList
        data={DeviceSetupSlides}
        renderItem={({ item }) => <DeviceSetupItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
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
      <Paginator data={DeviceSetupSlides} scrollX={scrollX} />
      <Pressable
        onPress={() => {
          // go to the next slide
          if (currentIndex < DeviceSetupSlides.length - 1) {
            // @ts-ignore
            slidesRef?.current?.scrollToIndex({
              index: currentIndex + 1,
            });
          }
        }}
      >
        <Text>Next</Text>
      </Pressable>
    </Flex>
  );
};

export default DeviceSetup;
