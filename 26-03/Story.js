import {TouchableOpacity, View, Image, Text} from "react-native"
import {Feather} from "@expo/vector-icons"
export default function Story({avatar, name, isCreateStory = false, isSeen}){
    return (
        <TouchableOpacity>
            <View>
                <View>
                    <Image source={avatar}/>
                    {
                        isCreateStory && (
                            <View>
                                <Feather name="plus" size={14} color="#fff"/>
                            </View>
                        )
                    }
                </View>
                <Text numberOfLines={1}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}