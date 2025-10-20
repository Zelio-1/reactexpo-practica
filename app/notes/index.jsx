// rnfes <- Crea el templete de un componente. Esto es gracias a la extesnion de React E7 

import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { useState } from 'react'

import AddNoteModal from '@/components/AddNoteModal'
import NoteList from '@/components/NoteList'
const NoteScreen = () => {
  
  const [notes /*Nombre del estado (esto es un array)*/, setNotes/*Funcion que modifica a notes para agregar un elemento*/] = useState([])
  const [modalVisible, setModalVisible] = useState (false) //false<- para que no se muestre el modal en un inicio
  const [newNote, setNewNote] = useState('')

  //Creamos la funcion addNewNote
  const addNewNote = () =>{
    if (newNote.trim() === '') return 
    

    setNotes((prevNotes)=>[
      ...prevNotes, //Hacer una copia de los elementos para agregar uno nuevo 
      {id: Date.now().toString(), text: newNote}
    ]) 

    setNewNote('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {/*FlatÑList*/}
      <NoteList notes ={notes}/>
      <TouchableOpacity 
        style={styles.addbtn} 
        onPress={()=> setModalVisible(true)}
      >
        <Text style={styles.addbtnTxt}>Agregar</Text>
      </TouchableOpacity>

      {/* Creamos la ventana Modal */} 
      <AddNoteModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNewNote = {addNewNote}
      />

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
    addbtn :{
      position: 'absolute',
      bottom: 50,
      left: 20,
      right:20,
      backgroundColor: '#007bff',
      padding:15,
      borderRadius:5,
      alignItems:'center'
    },
    addbtnTxt: {
      color: '#fff', 
      fontSize: 18,
      fontWeight: 'bold'
    }
})