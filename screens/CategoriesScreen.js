import CategoryGridTitle from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data'
import { FlatList, StyleSheet } from 'react-native'


const renderCategoryItem = (itemData) => {
    return <CategoryGridTitle 
            title={itemData.item.title} 
            color={itemData.item.color}/>
    
}

const CategoriesScreen = (params) => {
    
    return <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item)=>item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            />  
}

export default CategoriesScreen

const styles = StyleSheet.create({

})