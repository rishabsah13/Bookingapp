import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = () => {

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            console.log("user credentials", userCredentials)
            const user = userCredentials.user
            console.log("user details", user)
        })
    }
    useEffect(() => {

        try {
            const unsubscribe = auth.onAuthStateChanged((authUser) => {

                if (authUser) {
                    navigation.navigate("Main")
                }


            })
            return unsubscribe
        } catch (e) {
            console.log(e)
        }

    }, [])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 10, alignItems: "center" }}>
            <KeyboardAvoidingView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                    <Text style={{ color: "#003580", fontSize: 18, fontWeight: "700" }}>
                        Sign initialState
                    </Text>
                    <Text style={{ marginTop: 16, fontSize: 18, fontWeight: "500" }}>Sign In to Your Account</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "gray" }}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder='enter your email id'
                            placeholderTextColor={"black"}
                            style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginTop: 10, width: 300, fontSize: email ? 18 : 18 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: "700", color: "gray" }}>Password</Text>
                        <TextInput value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder='enter your password'
                            placeholderTextColor={"black"}
                            secureTextEntry={true}
                            style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300, fontSize: password ? 18 : 18 }} />

                    </View>
                </View>
                <Pressable
                    onPress={login}
                    style={{ width: 200, backgroundColor: "blue", padding: 15, borderRadius: 8, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}>
                    <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Login</Text>
                </Pressable>

                <Pressable style={{ marginTop: 20 }} onPress={() => navigation.navigate("Register")}
                >
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>Don't have an account? Sign up</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
