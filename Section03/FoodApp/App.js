import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CagegoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#3f2f25",
        drawerActiveBackgroundColor: "#e4baa1",

        drawerInactiveTintColor: "white",
        drawerInactiveBackgroundColor: "#351401",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.rootScreen}>
          <StatusBar style="light" />
          <FavoritesContextProvider>
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
                  //component={CategoriesScreen}
                  component={DrawerNavigator}
                  options={{
                    title: "All Category",
                    headerShown: false,
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
                <Stack.Screen
                  name="MealDetail"
                  component={MealDetailScreen}
                  options={{
                    title: "About the Meal",
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </FavoritesContextProvider>
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
