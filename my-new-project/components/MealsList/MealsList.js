import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({item}) => {
    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item. affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps}></MealItem>


    }
  return (
    <View styles={styles.container}><FlatList data={item} keyExtractor={(item)=> item.id} renderItem={renderMealItem} /></View>
  )
}

export default MealsList
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding : 16
    }
})
