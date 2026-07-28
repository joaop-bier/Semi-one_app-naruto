import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'

export default function Home(){

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const go = () => {
        console.log(email, pass)
        router.push('/(tabs)')
    }

    return(
        <View style={s.body}>
            <View style={s.wrap}>
                <Text style={s.t}>LOGIN</Text>
                <Text style={s.t}>Email</Text>
                <TextInput style={s.input} onChangeText={setEmail} value={email} placeholder='Insira seu email'/>
                    <Text style={s.t}>Senha</Text>
                <TextInput style={s.input} onChangeText={setPass} value={pass} placeholder='Insira sua senha'/>
                <View>
                    <TouchableOpacity style={s.button} onPress={go}>
                        <Text style={s.btnText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    body: {
        backgroundColor: "#1f3d99",
        flex: 1
    },

    wrap: {
        backgroundColor: "#3668a8",
        width: "60%",
        height: 265,
        alignSelf: "center",
        marginTop: "70%",
        padding: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    t: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 8,
    },

    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 8,
    },

    button: {
        backgroundColor: "#1f3d99",
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
    },

    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})