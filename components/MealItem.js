import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealsDetails from "./MealsDetails";

const MealItem = ({
  id,
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
}) => {
  const pressHandler = () => {
    navigation.navigate("MealDetails", { categoryId: id });
  };
  const navigation = useNavigation();

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imgUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealsDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});
