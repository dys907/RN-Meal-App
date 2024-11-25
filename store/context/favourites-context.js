import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
})

const FavouritesContextProvider = ({children}) => {
    const [favouriteMealId, setFavouriteMealsID] = useState([])

    const addFavourite = (id) => {
        setFavouriteMealsID((currentFavIds)=> [...currentFavIds,id])
    }
    const removeFavourite = (id) => {
        setFavouriteMealsID((currentFavIds) => currentFavIds.filter((mealId)=> mealId !== id))
    }

    const value = {
        ids: favouriteMealId,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider