import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native"

const FavouritesScreen = (params) => {
  const favouriteMealsContext = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsContext.ids.includes(meal.id)
  );

  return favouriteMeals.length === 0 ? (
    <View style={styles.rootContainer}>
      <Text style={styles.favouriteText}>No Favourites yet</Text>
    </View>
  ) : (
    <MealsList items={favouriteMeals} />
  );
};
export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:"center"
    },
    favouriteText: {
        color:'white',
        fontWeight:'bold',
        fontSize: 18
    }
})
