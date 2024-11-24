import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView,  Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {

  const catID = route.params.categoryId;
  const selectedMeal = MEALS.find((meal) => catID === meal.id);

  const headerButtonPressHandler = () => {
    console.log('pressed');
  }

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
        icon={'star'}
        color={'white'}
        onPress={headerButtonPressHandler}
        />
      }
    })
  },[navigation, headerButtonPressHandler])

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
