import React, { useState } from 'react'
import {View, KeyboardAvoidingView, ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import colors from '../../theme/colors'
import { globalStyles } from '../global/style'
import { Logo } from '../Common/logo'
import { screenName } from '../global/constant'

export const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("email:", email)
        console.log("password:", password)
    } 
    
    return (
            <ScrollView>
                <Logo/>
                <View style={styles.signInContainer}>
                    <Text style={styles.txtWelcome}>Welcome Back!</Text>
                    <Image source={require('../../assets/img-signed-in.png')}
                        style={styles.img}>
                    </Image>
                    <TextInput  style={globalStyles.input}
                                placeholder='Enter your mail'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                />
                    <TextInput  style={globalStyles.input}
                                placeholder='Enter password'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                />

                    <TouchableOpacity>
                        <Text style={styles.txtForgetPassword}>Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
                        <Text style={globalStyles.txtButton}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{fontSize: 16}}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate(screenName.REGISTER)}>
                            <Text style={styles.txtSignUp}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
    )
}

const styles=StyleSheet.create({
    signInContainer:{
        flex: 1,
        alignItems: 'center',
        marginTop: 80
    },
    img:{
        width: 220,
        height: 200,
        marginBottom: 20,
    },
    txtForgetPassword:{
        fontSize: 16,
        color:colors.primary,
    },
    txtSignUp:{
        fontSize: 16,
        color: colors.primary
    },
    txtWelcome: {
        fontSize: 20,
        fontWeight:'bold',
        color: 'rgba(0, 0, 0, 0.75)',
    }
})