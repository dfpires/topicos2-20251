import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native"
import {Formik} from "formik"
import {styles} from "./styles"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { validationSchema } from "./validation"
// componente visual que retorna uma View com o erro
const ErrorMessage = ({errorValue}) => {
  return errorValue ? (
    <View>
      <Text> {errorValue} </Text>
    </View>
  ) : 
  null
}

export default function Registro(){
    return (
        <>
          <SafeAreaView style={styles.topSafeArea}/>
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> Register </Text>
            </View>
            <Formik
              initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: ""
              }}
              validationSchema={validationSchema}
              >
              {({
                handleChange,
                values,
                errors,
                touched,
                handleBlur,
              }) => (
              <KeyboardAwareScrollView>
                <View>
                  <Text> First Name </Text>
                  <TextInput value={values.firstName} onChangeText={handleChange("firstName")}
                            onBlur={handleBlur("firstName")}/>
                  <ErrorMessage errorValue={touched.firstName && errors.firstName}/>
                </View>
                <View>
                  <Text> Last Name </Text>
                  <TextInput value={values.lastName} onChangeText={handleChange("lastName")}/>
                </View> 
                <View>
                  <Text> Email </Text>
                  <TextInput value={values.email} onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}/>
                  <ErrorMessage errorValue={touched.email && errors.email}/>
                </View> 
                <View>
                  <Text> Password </Text>
                  <TextInput value={values.password} onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}/>
                  <ErrorMessage errorValue={touched.password && errors.password}/>
                </View>  
                <View>
                  <Text> Confirm Password </Text>
                  <TextInput value={values.confirmPassword} 
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                  />
                  <ErrorMessage errorValue={touched.confirmPassword && errors.confirmPassword}/>
                </View>
                <TouchableOpacity>
                  <Text> SUBMIT </Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
              )}
            </Formik>
          </SafeAreaView>
        </>
    )
}