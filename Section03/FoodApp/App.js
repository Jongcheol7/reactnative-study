import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CagegoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.rootScreen}>
          <StatusBar style="light" />
          {/* 네비게이션은 view 로 감싸지 말아야한다. */}
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                contentStyle: {
                  backgroundColor: "#3f2f25",
                },
              }}
            >
              {/* 아래에 네이게이션에 화면들을 등록해둔다. */}
              <Stack.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                  title: "All Category",
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
                // options={({ route, naavigation }) => {
                //   const catId = route.params.categoryId;
                //   console.log("catId :", catId);
                //   return {
                //     title: catId,
                //   };
                // }}
              />
              <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  rootScreen: {
    flex: 1,
  },
});
