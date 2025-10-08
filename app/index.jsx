import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import artorias from '@/assets/images/artorias.png';
import { UseRouter } from 'expo-router'; //Para hacer un hook.
//Stylesheet: Hace posible poner los estilos hasat abajo
const HomeScreen = () =>{
  
  const router = UseRouter();

  return (
    <View style = {styles.container} /*Esto es lo primero que se hace para empezar a poner los componenetes necesarios. Los
    componentes necesitan importar. Los estilos usan doble llave*/> 
      <Image source={artorias} style ={styles.Image}/>
      <Text style={styles.titulo}>Chilaquiles con doritos</Text>
      <Text style={styles.subtitulo}>Captura tus notas en cualquier lugar y momento</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>router.push('./notes')}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Iniciar</Text>
      </TouchableOpacity>
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
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center'
  },
  subtitulo:{
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20
  },
  btn: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8, //Para redondera las aristas del btn
    alignItems: 'center'
  }
})

export default HomeScreen