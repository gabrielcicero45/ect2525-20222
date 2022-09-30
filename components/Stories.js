import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';


export default function Stories() {
  const [stories, setStories] = useState([])
  useEffect( () => {
    const getData = async () =>{
      const res = await fetch('https://mobile.ect.ufrn.br:3000/stories')
      const stories = await res.json()
      setStories(stories)
    }
    getData()
  }, [])
  

  function renderItem({item}){
    return <View style={styles.story}>
    <Image source={{uri: item.imgPerfilUri}} style={styles.imageStory} />
    <Text>{item.nomeUsuario}</Text>
    </View>
  }
  return (
    <View style={styles.stories}>
    <FlatList 
    data={stories}
    renderItem={renderItem}
    keyExtractor={item=>item.id}
    horizontal
    showsHorizontalScrollIndicator={false}/>
  </View>
  )
}

const styles = StyleSheet.create({
    imageStory:{
        width: 70,
        height: 70,
        borderRadius: 35,
      },
      stories:{
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#fff',
        
      },
      story:{
        height:90,
        width:90,
        
        alignItems: 'center',
      },
  })