import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {

  const signOutPressed = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground 
          style={{width: '100%', height: '98%'}} 
          source={require('../assets/profilebanner.jpeg')}/>
        <View style={styles.headerContentContainer}>
          <View style={styles.profilePictureContainer}>
            <View style={styles.profilePicture}/>
          </View>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileText}>
              Name
            </Text>
            <Text style={styles.profileText}>
              Books
            </Text>
          </View>
          <View style={styles.profileSubscriptionContainer}>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Pressable style={styles.listContainer}>
          <View>
            <Text>
              Text
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer}>
          <View>
            <Text>
              Text
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer}>
          <View>
            <Text>
              My List
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.listContainer} onPress={signOutPressed}>
          <View>
            <Text>
              Sign Out
            </Text>
          </View>
        </Pressable>
        <View style={{flex: 3}}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F0',
    alignItems: 'center',
  },

  headerContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'salmon',
    alignItems: 'center',
    margin: 10,
  },

  headerContentContainer: {
    width: '90%',
    height: '100%',
    // backgroundColor: 'bisque',
    position: 'absolute',
  },
  
  profilePictureContainer: {
    width: '100%',
    flex: 2,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },

  profilePicture: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    borderRadius: 50,
  },

  profileNameContainer: {
    width: '100%',
    flex: 1,
    // backgroundColor: 'salmon',
  },

  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  profileSubscriptionContainer: {
    width: '100%',
    flex: 1.2,
    backgroundColor: '#FBF7F0',
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },

  contentContainer: {
    flex: 2,
    width: '90%',
    backgroundColor: '#FBF7F0',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },

  listContainer: {
    flex: 1,
    width: '90%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },


})

export default Profile