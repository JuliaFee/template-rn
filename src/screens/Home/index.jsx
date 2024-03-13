import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../../components/title';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

import { user } from "../../data/Profile";
export default function Home() {
    const navigations = useNavigation();
  return (
    <View>
     <Title title={"lskdnskldgnsldkngskldngklsdgnskldngskldngkld"}></Title>
     <TouchableOpacity onPress={() => navigations.navigate("Profile", {user})}>
  <Title title={"Profile"}></Title>
     </TouchableOpacity>
    </View>
  )
}