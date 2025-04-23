import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {View, Text, Button} from "react-native"

// cria a pilha de navegação
const Stack = createStackNavigator()

// componente HomeScreen
function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Tela inicial </Text>
            <Button title="Café" onPress={() => 
                navigation.navigate('Cafe')
            }/>
        </View>
    )
}
// componente CafeScreen
function CafeScreen({navigation}){
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Tela dos detalhes de Café </Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}
export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={HomeScreen}/>
                <Stack.Screen name="Cafe" component={CafeScreen}/>
          {/*      <Stack.Screen name="Chocolate" component={ChocolateScreen}/>
                <Stack.Screen name="Cha" component={ChaScreen}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}