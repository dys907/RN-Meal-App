import { View, FlatList, StyleSheet } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";

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




    const renderMealItem = (itemData) => {

        const item = itemData.item
        const mealItemProps = {
            title: item.title,
            imgUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration

        }

        return <MealItem {...mealItemProps}/>
    }

    return <View style={styles.container}>
        <FlatList 
             data={displayedMeals} keyExtractor={(item)=> item.id}
             renderItem={renderMealItem}
            />
    </View>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})