import React from "react";
import { StyleSheet } from 'react-native'
import { BusinessCardType } from "../utils/types";
import { View, Text } from './Themed'

interface Props {
  card: BusinessCardType
}

export default function BusinessCard({ card }: Props) {

  console.log('BusinessCard: ', card)

  return (
    <View style={[styles.container, { backgroundColor: card.config.color }]}>
      <View>
        
      </View>
      <Text style={styles.title}>{card.info.name}</Text>
      <Text style={styles.title}>{card.info.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    borderRadius: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
  },
})