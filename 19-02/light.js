import {SafeAreaView, Image, Switch} from "react-native"
import {useState} from "react"
export default function Light(){
    // cria variável de estado com hook useState
    const [isEnabled, setIsEnabled] = useState(false)
    return (
        <SafeAreaView>
            <Image />
            <Switch />
        </SafeAreaView>
    )
}