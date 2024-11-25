import { View, FlatList, StyleSheet } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
    const catID = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    })


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category)=> category.id === catID).title

        navigation.setOptions({
            title: categoryTitle
        })
    },[catID,navigation])

    return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({

})