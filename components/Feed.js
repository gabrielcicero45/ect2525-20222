import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
export default function Feed() {
    const [feed, setFeed] = useState([])
  useEffect( () => {
    const getData = async () =>{
      const res = await fetch('https://mobile.ect.ufrn.br:3000/feed')
      const feed = await res.json()
      setFeed(feed)
    }
    getData()
  }, [])
    function renderItem({item}){
        return <View style={styles.post}>
        <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
                <Image
                    source={{uri: item.imgPerfilUri}}
                    style={styles.postHeaderImg}
                />
                <Text>{item.nomeUsuario}</Text>
            </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black" />
        </View>
        <View />
        <Image
            source={{uri: item.imgPostUri}}
            aspectRatio={item.aspectRatio}
            style={styles.postImg}
        />
        <View style={styles.footer}>
            <FontAwesome5
                name="heart"
                size={28}
                color="black"
                style={styles.footerIcon}
            />
            <FontAwesome5
                name="comment"
                size={28}
                color="black"
                style={styles.footerIcon}
            />
            <FontAwesome5
                name="paper-plane"
                size={28}
                color="black"
                style={styles.footerIcon}
            />
        </View>
    </View>
    }
    return (
        <View style={styles.feed}>
            <FlatList data={feed}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        
    },
    feed: {
        flex: 1,
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        height: 60,
    },
    postHeaderLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    postHeaderRight: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 12,
        height: 60,
    },
    postHeaderImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 10,
    },
    postImg: {
        height: undefined,
        width: "100%",
    },
    footer: {
        height: 60,
        flexDirection: "row",
    },
    footerIcon: {
        padding: 8,
        margin: 5,
    },
})