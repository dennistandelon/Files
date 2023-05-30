import { StyleSheet, Text, View, Image, FlatList, Pressable, Alert } from 'react-native'
import React from 'react'
import { categoryBooks } from '../data/data'

// const BookList = ({data, genre}) => {
const BookList = ({image, title}) => {

  const bookPressed = () => {
    Alert.alert("Book", "Pressed 🤔");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <Text style={styles.text}>{title}</Text>
    </View>
    // <FlatList 
    //     numColumns={2}
    //     bounces={false}
    //     showsVerticalScrollIndicator={false}
    //     horizontal={false} 
    //     scrollEnabled={false} 
    //     data={data} 
    //     renderItem={({item}) => (
    //       item.genre === genre ?
    //         <Pressable onPress={bookPressed}>
    //             <View style={styles.cardContainer}>
    //                 <Image style={styles.image} source={item.image}/>
    //                 <Text numberOfLines={2} style={styles.text}>{item.title}</Text>
    //             </View>
    //         </Pressable>
    //         :
    //         <Pressable onPress={bookPressed}>
    //             <View style={styles.cardContainer}>
    //                 <Image style={styles.image} source={item.image}/>
    //                 <Text numberOfLines={2} style={styles.text}>{item.title}</Text>
    //             </View>
    //         </Pressable>
    // )}/>
  )
}

export default BookList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: "salmon",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },

    cardContainer: {
      width: 150,
      alignItems: 'center',
      gap: 10,
  },

    image: {
        width: 120,
        height: 180,
        borderRadius: 10,
    },

    text: {
        width: 200,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})