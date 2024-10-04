import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {MEALS} from "../data/dummy-data"
import MealItem from './MealItem';

const MealsOverviewScreen = ({route}) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    const renderMealItem = (itemData) => {
        return <MealItem title={itemData.item.title}></MealItem>


    }
  return (
    <View styles={styles.container}><FlatList data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={renderMealItem} /></View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding : 16
    }
})
