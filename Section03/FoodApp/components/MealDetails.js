import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({ meal }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{meal.duration}</Text>
      <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
