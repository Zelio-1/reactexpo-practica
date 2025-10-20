import {View, Text, StyleSheet} from 'react-native'

const NoteItem = ({/*Props: */note})=> {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.notetext}>{note.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})
export default NoteItem