import { Text, View, StyleSheet, Image} from "react-native";
import artorias from '@/assets/images/artorias.png';
//Stylesheet: Hace posible poner los estilos hasat abajo
const HomeScreen = () =>{
  return (
    <View style = {styles.container} /*Esto es lo primero que se hace para empezar a poner los componenetes necesarios. Los
    componentes necesitan importar. Los estilos usan doble llave*/> 
      <Image source={artorias} style ={styles.Image}/>
      <Text>Edit app/index.jsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor:'#f8f9fa'
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 20, 
    borderRadius: 10
  }
})

export default HomeScreen