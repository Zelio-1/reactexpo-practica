// rnfes <- Crea el templete de un componente. Esto es gracias a la extesnion de React E7 

import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const NoteScreen = () => {
  const {notes/*Nombre del estado (esto es un array)*/, setNotes/*Funcion que modifica a notes para agregar un elemento*/} = useState([
    {id: 1, text:'nota 1'},
    {id: 2, text:'nota 2'},
    {id: 3, text:'nota 3'},

  ])//useState([]) -> Esto es un hook.

  return (
    <View style={styles.container}>
      <FlatList
        //Props
        data = {notes}
        keyExtractor={(item)=> item.id} //Cada vex que se renderiza el el elemento debe tener un id.Hace un mapeo de items 
        renderItem={({item})=>(
          <view style={styles.noteItem}>
            <Text style={styles.notetext}>{item.text}</Text>
          </view>
        )}//Esto pinta la pantalla con los elementos
      />
      <TouchableOpacity style={styles.addbtn}>
        <Text style={styles.addbtn}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20, //El padding es el margen interior. 
      backgroundColor: '#fff'
    }, 
    noteItem: {
      flexDirection: 'row', //Especificar si el grid es fila o columna 
      justifyContent: 'space-between',
      backgroundColor: '#f5f5',
      padding: 15, 
      borderRadius: 5, 
      marginVertical: 5
    },
    notetext: {
      fontSize: 18,

    },
    addbtn :{
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: '#666',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center'
    }
})