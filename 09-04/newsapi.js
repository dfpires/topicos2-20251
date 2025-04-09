import {useEffect, useState} from "react"
import {SafeAreaView, View, Text, FlatList} from "react-native"
import { getNews } from "./api"

export default function NewsApi(){
    // guarda os artigos
    const [articles, setArticles] = useState([])
    // função fetchData
    const fetchData = async () => {
        const newArticles = await getNews()
        setArticles(newArticles)
    }
    // esse hook é executado quando carrega página
    useEffect(() => {
        fetchData() // consumir a API
    })

    const renderArticle = ({item}) => <Text> {item.title} </Text>
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={articles}
                    renderItem={renderArticle}
                    keyExtractor={(item) => item.url}
                    />
            </View>
        </SafeAreaView>
    )
}