import React, { useState } from 'react'
import {View, Text, TextInput,  TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import colors from '../../theme/colors'
import { Logo } from '../Common/logo'
import { screenName } from '../global/constant'

export const Register = ({navigation}) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleRegister = () => {
        console.log('name: ', name);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log('confirm: ', confirm);
        
        setName('');
        setEmail('');
        setPassword('');
        setConfirm('');
    }

    return (
            <ScrollView>
                <Logo/>
                <View style={styles.loginContainer}>
                    <Text style={styles.txtWelcome}>Welcome Onboard!</Text>
                    <Text style={styles.txtGreeting}>Let's help you meet up your tasks</Text>
                    <TextInput  style={styles.input}
                                placeholder="Enter your full name"
                                value={name}
                                onChangeText={(text) => setName(text)}
                                />
                    <TextInput  style={styles.input}
                                placeholder="Enter your email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                />

                    <TextInput  style={styles.input}
                                placeholder="Enter your password"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                />

                    <TextInput  style={styles.input}
                                placeholder="Confirm password"
                                secureTextEntry={true}
                                value={confirm}
                                onChangeText={(text) => setConfirm(text)}
                                />
                    <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                        <Text style={styles.txtButton}>Register</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <Text style={styles.txtQuestion}>Aldready have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate(screenName.LOGIN)}>
                            <Text style={styles.txtSignIn}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>  
    )
}

const styles=StyleSheet.create({
    loginContainer:{
        flex:1,
        alignItems:'center',
        marginTop:96
    },
    txtWelcome:{
        fontSize: 20,
        fontWeight:'bold',
        color: 'rgba(0, 0, 0, 0.75)',
        marginBottom: 13
    },
    txtGreeting:{
        fontSize: 15,
        color:'rgba(0, 0, 0, 0.74)',
        marginBottom: 40
    },
    input:{
        width: 350,
        height: 60,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderWidth: 1,
        marginBottom: 15,
        borderColor: colors.primary
    },
    registerButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 65,
        backgroundColor: colors.primary,
        marginTop: 30
    },
    txtButton:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    txtQuestion:{
        fontSize: 16
    },
    txtSignIn:{
        fontSize: 16,
        color: colors.primary
    }
})