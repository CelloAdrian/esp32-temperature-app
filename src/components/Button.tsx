import { Pressable, Flex, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";

interface ButtonProps {
  buttonText: string;
  iconName: any;
  iconSize: number;
}

const Button = ({ buttonText, iconName, iconSize }: ButtonProps) => {
  return (
    <Pressable
      width="full"
      backgroundColor={"#181818"}
      paddingX={50}
      paddingY={4}
      borderRadius={10}
    >
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" color="#F7F7F7">
          {buttonText}
        </Text>
        <AntDesign name={iconName} size={iconSize} color="#F7F7F7" />
      </Flex>
    </Pressable>
  );
};

export default Button;
