import { StyleSheet, Text, View } from "react-native"
import React from 'react';

import colors from './../../color-shemes.json'

const styles = StyleSheet.create({
    sloganContainer: {
        height: '13%',
        backgroundColor: colors.primary.backgroundColor,
        borderTopColor: colors.primary.borderColor,
        borderTopWidth: 2,
        justifyContent: 'center',
        padding: 5
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'RobotoSlab'
    }
})

const Slogan = () => {
    return (
        <View style={styles.sloganContainer}>
            <Text style={styles.text}>
                "Gratitude is nothing if it's not felt"
            </Text>
            <Text style={styles.text}>Jamie Varon</Text>
        </View>
    )
}

export default Slogan