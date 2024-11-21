import CategoryGridTitle from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data'
import { FlatList } from 'react-native'


const renderCategoryItem = (item) => {
    return <CategoryGridTitle/>
    
}

const CategoriesScreen = (params) => {
    
    return <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item)=>item.id}
            renderItem={renderCategoryItem}
            />  
}

export default CategoriesScreen