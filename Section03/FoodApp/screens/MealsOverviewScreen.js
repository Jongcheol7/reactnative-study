import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  // navigation prop 뿐만 아니라 route 도 받을수 있다.
  // route 를 통해서 전달받은 갓을 꺼낼수 있다.
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen - {catId}</Text> */}
      <FlatList
        data={displayedMeals}
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
