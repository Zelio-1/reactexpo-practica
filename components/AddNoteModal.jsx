import {StyleSheet, Text, View, TouchableOpacity, Modal, TextInput} from 'react-native'

const AddNoteModal = ({modalVisible, setModalVisible, newNote, setNewNote, addNewNote}) => {
  return (
    <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={()=> setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Agregar una Nota Nueva
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Teclea una descripción'
              placeholderTextColor={'#aaa'}
              value={newNote}
              onChangeText={setNewNote}
            />
            <View style={styles.modalBtns}>
              {/* Boton Cancelar */}
              <TouchableOpacity 
                style={styles.cancelBtn}
                onPress={()=>setModalVisible(false)}
              >
                <Text style={styles.cancelBtnTxt}>Cancelar</Text>
              </TouchableOpacity>

              {/* Boton Aceptar */}
              <TouchableOpacity 
                style={styles.saveBtn}
                onPress={addNewNote}
              >
                <Text style={styles.saveBtnTxt}>Agregar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
  )
}

export default AddNoteModal

const styles = StyleSheet.create({
    cancelBtn: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      margin: '10px', 
      marginRight: 10,
      alignItems: 'center'      
    },
    cancelBtnTxt:{
      fontSize: 16,
      color: '#333'
    },
    saveBtn: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius:5,
      flex:1,
      margin: '10px', 
      marginRight:10,
      alignItems: 'center'
    },
    saveBtnTxt: {
      fontSize:16,
      color:'#fff'
    },
    modalOverlay: {
      flex: 1, 
      backgroundColor: 'rgba(0,0,0,0,5)',
      justifyContent: 'center',
      alignItems:'center'
    },
    modalContent:{
      backgroundColor:'#fff',
      padding: 20, 
      borderRadius: 10, 
      width: '80%'
    }, 
    input: {
      borderWidth:1,
      borderRadius:8,
      padding:10,
      fontSize:16,
      marginBottom:15
    }, 
    modalTitle:{
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center',
      fontSize:20
    }
})