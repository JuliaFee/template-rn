import { View, Text } from 'react-native'
import React from 'react'
import Title from '../../components/title'

export default function Profile({ route }) {
  const { user } = route.params;
  return (
  
    <View>
     <Title title={"l.......................................llololo"}></Title>
    <Title title={`${user.name} ${user.age} ${user.country}`}></Title>
    </View>
  )
}