import {SafeAreaView, Image, Switch, StyleSheet} from "react-native"
import {useState} from "react"
import bulbOn from "bulb-on.jpg"
import bulbOff from "bulb-off.jpg"
export default function Light(){
    // cria variável de estado com hook useState
    const [isEnabled, setIsEnabled] = useState(false)
    const mudaValor = () => setIsEnabled(
        (estadoAnterior) => !estadoAnterior)
    
    return (
        <SafeAreaView>
            <Image 
                fadeDuration={0}
                source={isEnabled ? bulbOn : bulbOff} 
                style={styles.image}/>
            <Switch
                onValueChange={mudaValor} 
                value={isEnabled}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300
    }
})