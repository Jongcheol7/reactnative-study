import { StyleSheet, Text } from "react-native";

export default function Subtitle({ title }) {
  return <Text style={styles.subtitle}>{title}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
