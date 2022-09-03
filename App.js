import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  const bgImg = { uri: "https://img.freepik.com/vetores-gratis/fundo-de-estilo-comico-de-velocidade-azul_23-2148820924.jpg" };
  const ditto = {uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
  const pikachu = {uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png"}
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
      <Image source={ditto} style={styles.pokemon}></Image>
      <Image source={pikachu} style={styles.pokemon}></Image>
      <Text style={styles.text}>Ditto</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  pokemon:{
    flex: 2,
    height:10,
    width:"100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 48,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
