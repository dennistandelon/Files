import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import BookList from '../components/BookList'
import { categoryBooks, fictionBooks, nonFictionBooks, comedyBooks } from '../data/data'
import { Books } from '../data/dataset'

const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{
          width: '100%',
          // backgroundColor: 'lightsalmon',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 15,
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 25,
          }}>
            Library
          </Text>
        </View>
          <FlatList 
            numColumns={2}
            bounces={false}
            showsVerticalScrollIndicator={false}
            horizontal={false} 
            scrollEnabled={false} 
            data={Books} 
            renderItem={({item}) => (
              // <Pressable onPress={bookPressed}>
                  <View style={styles.cardContainer}>
                    <Image style={styles.image} source={item.image}/>
                    <Text numberOfLines={2} style={styles.text}>{item.title}</Text>
                  </View>
              // </Pressable>
        )}/>
        
        {/* <View style={{
          width: '100%',
          // backgroundColor: 'lightsalmon',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 25,
          }}>
            Library
          </Text>
        </View>
        {categoryBooks.map(item => (
          <BookList 
          key={item.id}
          image={item.image}
          title={item.title}
          />
        ))}
        {fictionBooks.map(item => (
          <BookList 
          key={item.id}
          image={item.image}
          title={item.title}
          />
        ))}
        {nonFictionBooks.map(item => (
          <BookList 
          key={item.id}
          image={item.image}
          title={item.title}
          />
        ))}
        {comedyBooks.map(item => (
          <BookList 
          key={item.id}
          image={item.image}
          title={item.title}
          />
        ))} */}
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: "#FBF7F0",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    },

    cardContainer: {
      width: 190,
      alignItems: 'center',
      // backgroundColor: 'salmon',
      paddingVertical: 15,
      gap: 10,
    },

    image: {
        width: 140,
        height: 210,
        borderRadius: 10,
    },

    text: {
        width: 140,
        fontWeight: 'bold',
        fontSize: 17,
    }
})

export default Library