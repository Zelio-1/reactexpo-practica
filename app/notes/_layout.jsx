import {Stack} from 'expo-router'; 

const NoteLayout = ()=>{
    return (
        <Stack
            screenOptions={{
                headerShown: false //Que no muestre otro menu. Unicamente aparece el del index.jsx
            }}    

        >

        </Stack>
    )
}

export default NoteLayout