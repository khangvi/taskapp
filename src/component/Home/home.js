import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import colors from '../../theme/colors'
import { Logo } from '../Common/logo'
import { globalStyles } from '../global/style'
import { Task } from '../Task/task'



export const Home = () => {
    const name = "Bé Mập"
    const image = 'https://i.pinimg.com/originals/fa/02/02/fa0202572e8aa734cedb154c413a4846.jpg'
    return (
        <ScrollView>
            <View style={styles.profileContainer}>
                <Logo/>

                <View style={styles.avaterContainer}>
                    <Image style={{width: 100, height: 100, borderRadius: 90}} source={{uri: image}}/>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.txtHeader}>Tasks List</Text>

                <View style={styles.taskView}>
                    <View style={{flexDirection: 'row'}}>
                            <TextInput
                                        placeholder='Write your task..'
                                        style={[globalStyles.input, {width: 280, height: 40, marginTop: 15, marginLeft: 15, marginRight: 10}]}
                            />
                        
                        <TouchableOpacity style={styles.addButton}
                        >
                            <Text style={{fontSize: 16, color:colors.primary}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{marginRight: 32}}>
                        <Task task="Build UI for TODO !!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>
                        <Task task="Build UI for TODO App!!"/>

                    </ScrollView>
                </View>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileContainer:{
        backgroundColor: colors.primary,
        height: 330
    },
    avaterContainer:{
        backgroundColor: colors.primary,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        fontSize: 20,
        padding: 10,
        color: 'white'
    },
    txtHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 20,
        marginBottom: 20
    },
    taskView: {
        height: 340,
        marginHorizontal: 25,
        backgroundColor: colors.secondary,
        elevation: 2,
        borderRadius: 20
    },
    addButton:{
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
        marginTop: 15
    }
    
})