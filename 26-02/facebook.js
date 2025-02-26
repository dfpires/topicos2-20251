import {SafeAreaView, Image, StyleSheet, Dimensions} from "react-native"
import ImagemFacebook from "./facebook-banner.jpg" 

const larguraTela = Dimensions.get("window").width
const alturaBanner = (larguraTela / 75) * 46 // razão da imagem - 75 x 46

export default function Facebook(){
    return (
        <>
            <Image source={ImagemFacebook} style={styles.banner}/>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TextInput/>
                    <TextInput/>
                    <TouchableOpacity> </TouchableOpacity>
                    <TouchableOpacity> </TouchableOpacity>
                    <TouchableOpacity> </TouchableOpacity>
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
    }
})