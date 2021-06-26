import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import CheckBox from '@react-native-community/checkbox';


export const Task = ({task}) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.taskContainer}>
            <CheckBox
                        value={isSelected}
                        onValueChange={(value) => setSelection(value)}
            />
            <Text style={styles.txtTask}>{task}</Text>

        </View>
    )
}

const styles=StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        marginLeft: 10
    },
    txtTask: {
        fontSize: 14,
        marginLeft: 5,
        marginRight: 30
    }
})