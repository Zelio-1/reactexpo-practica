import {FlatList, View} from 'react-native'
import NoteItem from './NoteItem'

const NoteList = ({notes}) =>{
    return (
        <View>
            <FlatList 
                data={notes}
                keyExtractor={(item)=> item.id} //Cada vez que se renderiza el el elemento debe tener un id. Hace un mapeo de items 
                renderItem={({item}) => (
                    <NoteItem note = {item}/>
                    /**
                        <View style={styles.noteItem}>
                            <Text style={styles.notetext}>{item.text}</Text>
                        </View>
                    */
                )}
             />
        </View>
    )
}

export default NoteList