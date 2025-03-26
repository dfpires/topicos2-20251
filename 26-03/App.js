import {SafeAreaView, View, FlatList, TouchableOpacity, Image} from "react-native"
import {Feather} from "@expo/vector-icons"
export default function Instagram(){
    const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

    return ( 
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Feather name="camera" size={24}/>
                </TouchableOpacity>
                <Image/>
                <TouchableOpacity>
                    <Feather name="send" size={24}/>
                </TouchableOpacity>
            </View>
            <FlatList/>
        </SafeAreaView>
    )
}