import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native"
import {Formik} from "formik"
import {styles} from "./styles"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
export default function Registro(){
    return (
        <>
          <SafeAreaView style={styles.topSafeArea}/>
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> Register </Text>
            </View>
            <Formik>
              <KeyboardAwareScrollView>
                <View>
                  <Text> First Name </Text>
                  <TextInput />
                </View>
                <View>
                  <Text> Last Name </Text>
                  <TextInput />
                </View>  
                <View>
                  <Text> Password </Text>
                  <TextInput />
                </View>  
                <View>
                  <Text> Confirm Password </Text>
                  <TextInput />
                </View>
                <TouchableOpacity>
                  <Text> SUBMIT </Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
            </Formik>
          </SafeAreaView>
        </>
    )
}