import {SafeAreaView, Image, StyleSheet, Dimensions, View, TextInput, TouchableOpacity, Text} from "react-native"
import ImagemFacebook from "./facebook-banner.jpg" 

const larguraTela = Dimensions.get("window").width
const alturaBanner = (larguraTela / 75) * 46 // razão da imagem - 75 x 46

export default function Facebook(){
    return (
        <>
            <Image source={ImagemFacebook} style={styles.banner}/>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TextInput style={styles.input} 
                               placeholder="Número de telefone ou e-mail"/>
                    <TextInput style={styles.input} 
                               placeholder="Senha" secureTextEntry={true}/>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.text}> Conecte-se </Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.text}> Esqueceu a senha </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.text}> Volte </Text> 
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <View style={styles.divider}>

                    </View>
                    <TouchableOpacity> </TouchableOpacity>
                </View>
            </SafeAreaView>       
        </>
    )
}
const styles = StyleSheet.create({
    banner: {
        resizeMode: "contain",
        width: "100%",
        height: alturaBanner
    },
    input: {
        borderWidth: 1,
        borderColor: "#cdcdcf",
        color: "#333333",
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15
    },
    button: {
        height: 42,
        borderRadius: 6,
        backgroundColor: "#1977f3",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        marginHorizontal: 25
    },
    text: {
        color: "white"
    }
})