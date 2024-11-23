import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer >
        <Stack.Navigator 
        initialRouteName="MealsCategories"
        screenOptions={{
          headerStyle: {backgroundColor: '#360202',},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#5f1212'}
        }}>
          <Stack.Screen 
          name="MealsCategories" 
          component={CategoriesScreen} 
          options={{title: 'Meals Categories',

          }}/>
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen}
          // options={({route, navigation})=> {
          //   const catID = route.params.categoryId
          //   return {
          //     title: catID
          //   }
          // }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
