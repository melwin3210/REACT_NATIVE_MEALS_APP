import React from 'react'
import { Pressable, View, Text } from 'react-native'

const CategoriesGridTile = ({title, color}) => {
  return (
    <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoriesGridTile
