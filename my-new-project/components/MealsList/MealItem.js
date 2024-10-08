import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MealsDetails } from "../MealsDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation()
  const selectMealItemHandler = () => {
    navigation.navigate('MealDetail',{
      mealId: id,
    })
  }
    
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:'#ccc'}} onPress={selectMealItemHandler} >
        <View>
          <Image source={{ uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealsDetails duration={duration} complexity={complexity} affordability={affordability} ></MealsDetails>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({

    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4

    },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin:8
  }
});
