import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} className="bg-orange-500 rounded-xl p-4 m-1">
      <Text className="text-center font-montserratRegular text-white">
        {title}
      </Text>
    </Pressable>
  )
}

export default Button
