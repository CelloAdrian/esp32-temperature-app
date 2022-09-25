import { View, StyleSheet } from "react-native";

const Handle = () => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={styles.indicator} />
    </View>
  );
};

export default Handle;

const styles = StyleSheet.create({
  indicator: {
    width: 44,
    height: 4,
    backgroundColor: "#DEDEDE",
    borderRadius: 10,
    alignSelf: "center",
  },
});
