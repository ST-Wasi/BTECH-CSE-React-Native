import { View, Text } from 'react-native'
import React from 'react'

const DishDetailScreen = ({route}) => {
  return (
    <View>
      <Text>DishDetailScreen: {route.params.categoryId}</Text>
    </View>
  )
}

export default DishDetailScreen