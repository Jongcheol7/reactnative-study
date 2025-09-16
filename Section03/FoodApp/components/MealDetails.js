import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({ meal, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{meal.duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.affordability.toUpperCase()}
      </Text>
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
