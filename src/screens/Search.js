import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Pressable, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import { categoryBooks, fictionBooks, nonFictionBooks, comedyBooks } from '../data/data'
import SearchFilter from '../components/SearchFilter'
import { Books } from '../data/dataset'

const Search = () => {

  const searchPressed = () => {
    Alert.alert("Searching", "Clicked");
  }  

  const [input, setInput] = useState("");

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true)

  const url = "https://us-central1-epilogapi.cloudfunctions.net/app/Book";

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}> 
        <View style={styles.headerTopBackground}/>
        <View style={styles.headerBottomBackground}/>
        <View style={styles.searchContainer}>
            <Pressable onPress={searchPressed}> 
                <Image style={styles.searchImage} source={require('../assets/search.png')}/>
            </Pressable>
            <TextInput 
              value={input}
              style={styles.searchTextInput} 
              placeholder='Search'
              onChangeText={text => setInput(text)}
              />
        </View>
      </View>
        <ScrollView style={styles.contentContainer} bounces={false} showsVerticalScrollIndicator={false}>
          <SearchFilter data={Books} input={input} setInput={setInput} />
          {/* {
            loading ? <ActivityIndicator size="large"/>
            : 
            // <SearchFilter data={data} input={input} setInput={setInput} />
            (data.map(item => (
              <Text key={item.BookID}>{item.Title}</Text>
            )))
          } */}
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CDC9C3',
      alignItems: 'center',
    },

    headerContainer: {
      // backgroundColor: 'salmon',
      width: '100%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerTopBackground: {
      flex: 1,
      width: '100%',
      backgroundColor: '#CDC9C3',
    },

    headerBottomBackground: {
      flex: 1,
      width: '100%',
      backgroundColor: '#FBF7F0',
    },

    searchContainer: {
      position: 'absolute',
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '90%',
      padding: 12,
      gap: 15,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'gray',
      shadowColor: "grey",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.8,
      shadowRadius: 6,
    },
  
    searchImage: {
      width: 20,
      height: 20,
    },

    searchTextInput: {
      width: '100%',
      fontSize: 18,
    },

    contentContainer: {
      width: '100%',
      backgroundColor: '#FBF7F0',
    },
})

export default Search