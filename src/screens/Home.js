import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View, Image, Button, Pressable, Alert, ScrollView, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-native-snap-carousel'
import { categoryBooks, fictionBooks, nonFictionBooks, comedyBooks } from '../data/data'
import BannerSlider from '../components/BannerSlider'
import CategoryButtons from '../components/CategoryButtons'
import BookList from '../components/BookList'
import BookSlider from '../components/BookSlider'
import { Books } from '../data/dataset'
import LinearGradient from 'react-native-linear-gradient'

const Home = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;

  const [categoryTab, setCategoryTab] = useState(1);

  const [user, setUser] = useState("User");

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

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  }

  const onSelectSwitch = (value) => {
    setCategoryTab(value);
  }

  const popularPressed = () => {
    navigation.navigate('Library');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'100%'}} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTopBackground}>
            <ImageBackground 
              style={{width: '100%', height: '100%'}} 
              source={require('../assets/aesthetic.jpeg')}/>
          </View>
          <View style={styles.headerBottomBackground}/>
          <View style={styles.headerContentContainer}>
            <View style={styles.profileContainer}>
              <Text numberOfLines={1} style={styles.headerTitle}>
                Welcome, {user}
              </Text>
              {/* <View style={styles.profileImage}/> */}
            </View>
            <View style={styles.sliderContainer}>
              <View style={styles.sliderTitleContainer}>
                <Text style={styles.sliderTitleText}>
                  Popular 🤩
                </Text>
                <Button title="See All" onPress={popularPressed}/>
              </View>
              <BookSlider data={Books}/>
              {/* <Carousel
                ref={(c) => { this._carousel = c; }}
                data={categoryBooks}
                renderItem={renderBanner}
                sliderWidth={windowWidth - 20}
                itemWidth={300}
              /> */}
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView 
            style={styles.categoryContainer} 
            showsHorizontalScrollIndicator={false}
            bounces={false} 
            horizontal={true}
            >
            <CategoryButtons selectionMode={1} onSelectSwitch={onSelectSwitch}/>
          </ScrollView>
          <View style={styles.bookContainer}>
              {categoryTab == 1 && 
                data.map(item => (
                  <BookList 
                  key={item.BookID}
                  image={item.CoverImage}
                  title={item.Title}
                  />
                // categoryBooks.map(item => (
                //   <BookList 
                //   key={item.id}
                //   image={item.image}
                //   title={item.title}
                //   />
                ))}
                
              {categoryTab == 2 && 
                fictionBooks.map(item => (
                  <BookList 
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  />
                ))}
              {categoryTab == 3 && 
                nonFictionBooks.map(item => (
                  <BookList 
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  />
                ))}
              {categoryTab == 4 && 
                comedyBooks.map(item => (
                  <BookList 
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  />
                ))}
            
          </View>

          {/* <Button title='Reading Room' onPress={() => navigation.navigate('Read')}/> */}
        </View>
        
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
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerContentContainer: {
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 30,
      position: 'absolute',
    },

    headerTopBackground: {
      width: '100%',
      height: 180,
      backgroundColor: '#CDC9C3',
    },

    headerBottomBackground: {
      width: '100%',
      height: 250,
      backgroundColor: '#FBF7F0',
    },

    profileContainer: {
      backgroundColor: '#FBF7F0',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderRadius: 15,
      shadowColor: "black",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 7,
    },

    headerTitle: {
      fontSize: 23,
      fontWeight: 'bold',
    },

    profileImage: {
      width: 32,
      height: 32,
      backgroundColor: '#000',
      borderRadius: 50,
    },
    
    sliderTitleContainer: {
      width: '92%',
      backgroundColor: '#FBF7F0',
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    sliderTitleText: {
      fontWeight: 'bold',
      fontSize: 21,
    },

    sliderContainer: {
      backgroundColor: '#FBF7F0',
      width: '100%',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      shadowColor: "grey",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 7,
    },

    categoryContainer: {
      width: '90%',
      // backgroundColor: 'salmon',
      paddingBottom: 18,
    },

    contentContainer: {
      backgroundColor: '#FBF7F0',
      width: '100%',
      alignItems: 'center',
    },

    bookContainer: {
      width: '100%',
      paddingTop: 20,
      backgroundColor: '#FBF7F0',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      shadowColor: "grey",
      shadowOffset: {
          width: 0,
          height: -1,
      },
      shadowOpacity: 1,
      shadowRadius: 7,
    },
})

export default Home