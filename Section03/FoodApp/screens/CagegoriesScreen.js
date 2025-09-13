import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, Text } from "react-native";

export default function CategoriesScreen({ navigation }) {
  // navigation을 CategoryGridTile 에서 바로 못쓰는 이유는 App.js 에 저 컴포넌트를 등록해두지 않았기 떄문.
  // prop 으로 전달해서 할수는 있긴하다. 혹은 저 쪽에서 useNavigation을 사용해도된다.
  function pressHandler(id) {
    navigation.navigate("MealsOverview", { categoryId: id });
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(item) => {
        return (
          <CategoryGridTile
            title={item.item.title}
            color={item.item.color}
            onPress={() => pressHandler(item.item.id)}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      numColumns={2}
      key={2}
    />
  );
}
