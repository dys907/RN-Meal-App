import { useLayoutEffect, useContext } from "react";
import { Text, View, Image, StyleSheet, ScrollView,  Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";


const MealDetailScreen = ({ route, navigation }) => {

  const favouriteMealsContext = useContext(FavouritesContext)

  const catID = route.params.categoryId;
  const selectedMeal = MEALS.find((meal) => catID === meal.id);

  const mealIsFavourite = favouriteMealsContext.ids.includes(catID)
  const changeFavouriteStatusHandler = () => {
    if(mealIsFavourite) {
      favouriteMealsContext.removeFavourite(catID)
    } else {
      favouriteMealsContext.addFavourite(catID)
    }
  }

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
        icon={mealIsFavourite ? 'star': 'star-outline'}
        color={'white'}
        onPress={changeFavouriteStatusHandler}
        />
      }
    })
  },[navigation, changeFavouriteStatusHandler])

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.containersContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: { marginBottom: 32 

  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },

  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  containersContainer: {
    width: "100%",
    alignItems: "center",
  },
});
