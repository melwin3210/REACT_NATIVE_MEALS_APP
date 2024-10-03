import React from 'react'
import { FlatList, View } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import CategoriesGridTile from '../components/CategoriesGridTile';

const renderCategoryItem = (itemData) => {
  return <CategoriesGridTile title = {itemData.item.title} color={itemData.item.color} />

}

const CategoriesScreen = () => {
  return (
 <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} />
  )
}

export default CategoriesScreen
