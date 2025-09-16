import { StyleSheet, Text } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <Text key={dataPoint} style={styles.listItem}>
      {dataPoint}
    </Text>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 30,
    backgroundColor: "#e2b497",
    color: "#351401",
    textAlign: "center",
  },
});
