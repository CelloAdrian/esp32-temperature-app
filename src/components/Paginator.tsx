import { Flex } from "native-base";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

const Paginator = ({ data, scrollX }: any) => {
  const { width } = useWindowDimensions();
  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      {data.map((_: any, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: "clamp",
        });
        const dotHeight = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={{
              width: dotWidth,
              height: dotHeight,
              borderRadius: 100,
              backgroundColor: "#181818",
              marginHorizontal: 8,
              opacity,
            }}
            key={index.toString()}
          />
        );
      })}
    </Flex>
  );
};

export default Paginator;
