import { View } from "native-base";

const Handle = () => {
  return (
    <View paddingY={2} backgroundColor="#F2F2F2" borderTopLeftRadius={24} borderTopRightRadius={24}>
      <View
        width={44}
        height={1}
        backgroundColor="#DEDEDE"
        borderRadius={10}
        alignSelf="center"
      />
    </View>
  );
};

export default Handle;
