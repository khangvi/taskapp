import React from 'react'
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import colors from '../../theme/colors'
import { Logo } from '../Common/logo'
import { screenName } from '../global/constant'

export const SplashScreen = (props) =>{
    return (
        <View style={{flex: 1}}>
            <Logo/>
            <View style={styles.splashContainer}>
                
                <Image source={require('../../assets/img-splash.png')}
                        style={styles.image} />
                <Text style={styles.txt1}>Gets things done with TODO</Text>

                <Text style={styles.txtScript}>
                Lorem ipsum dolor sit amet,{"\n"}
                consectetur adipiscing elit. Interdum dictum{"\n"}
                tempus, interdum at dignissim{"\n"}
                metus. Ultricies sed nunc.{"\n"}
                </Text>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{props.navigation.navigate(screenName.REGISTER)}}>
                    <Text style={styles.txtButton}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer:{
        flex:1,
        alignItems:'center',
    },
    image:{
        width: 220,
        height: 200,
        marginTop: 100,
        marginBottom: 20,
    },
    txt1:{
        textAlign:'center',
        fontSize: 20,
        fontWeight:'bold',
        marginBottom: 30
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 65,
        backgroundColor: colors.primary,
        marginTop: 50
    },
    txtButton:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    txtScript:{
        fontSize: 15,
        textAlign:'center'
    }
})