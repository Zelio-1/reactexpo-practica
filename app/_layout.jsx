import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle:{
        backgroundColor: '#ff8c00'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontSize:24,
        fontWeight: 'bold'
      },
      contentStyle: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#fff'
      }
    }}
  >

    <Stack.Screen name="screen" options ={{title: 'Home'}} /*Esto es el titulo del menu*/ />
  </Stack>;
}

//Stack navigator: {stack} de expo-router: Esto lo que hace es que 
//Tipos de navegacion: Stack, slot, tabs, drawer.
export default RootLayout