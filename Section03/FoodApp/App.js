import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CagegoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* 네비게이션은 view 로 감싸지 말아야한다. */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* 아래에 네이게이션에 화면들을 등록해둔다. */}
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
