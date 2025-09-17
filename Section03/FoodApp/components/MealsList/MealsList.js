import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen - {catId}</Text> */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          return (
            <MealItem
              id={item.item.id}
              title={item.item.title}
              imageUrl={item.item.imageUrl}
              duration={item.item.duration}
              complexity={item.item.complexity}
              affordability={item.item.affordability}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
