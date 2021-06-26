import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import colors from '../../theme/colors'

export const Logo = () => {
    return (
    <View style={styles.ellipse}>
        <Text style={styles.txtLogo}>TODO</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    ellipse:{
        backgroundColor: colors.secondary,
        height: 100,
        width: 150,
        borderBottomRightRadius: 120,
        },
    txtLogo:{
        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
        marginTop: 10,
    }
})