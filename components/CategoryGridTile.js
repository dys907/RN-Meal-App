import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({ title, color, onPress }) => {

  return (
    <View style={[styles.gridItem]}>
      <Pressable 
        style={({pressed}) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden'
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius:8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
