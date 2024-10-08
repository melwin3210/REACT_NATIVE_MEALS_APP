import {useLayoutEffect} from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealsDetails } from "../components/MealsDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { IconButton } from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
// const {addFavorite, removeFavorite, ids} =   useContext(FavoritesContext);
const favMealIds = useSelector((state)=>state.favoriteMeals.ids)
const dispatch = useDispatch()
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favMealIds.includes(mealId)
const changeFavoriteStatusHandler = () => {
  mealIsFavorite ? dispatch(removeFavorite({id:mealId})) : dispatch(addFavorite({id:mealId}))  
}

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight:() =>{
            return <IconButton onPress={changeFavoriteStatusHandler} name={mealIsFavorite ? 'star' : 'star-outline'} color={'white'} />
        }
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer} >
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}></Image>
      <Text style={styles.title} >{selectedMeal.title} </Text>
      <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      ></MealsDetails>
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer} >
      <Subtitle>Incredients</Subtitle>
      <List data={selectedMeal.ingredients} ></List>
      
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} ></List>
      </View>
      </View>
    
     
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
rootContainer:{
    marginBottom:32
},

    image:{
        width:'100%',
        height:350,
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white',
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center'
    }
})
