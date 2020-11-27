import { StyleSheet, Text, View } from "react-native"
import React from 'react';
import moment from 'moment'

import colors from './../../color-shemes.json'

const styles = StyleSheet.create({
    headingContainer: {
        minHeight: 90,
        height: '15%',
        backgroundColor: colors.primary.backgroundColor,
        borderBottomColor: colors.primary.borderColor,
        borderBottomWidth: 2,
        padding: 5,
        justifyContent: 'center'
    },
    text: {
        fontSize: 26,
        fontFamily: 'RobotoSlab',
        fontWeight: '700',
    }
})

interface HeadingProps {
    date: string
}

const Heading = (props: HeadingProps) => {
    let heading;
    if(props.date === moment().format('DD MMMM, yyyy')) {
        heading = "Today I'm grateful for,";
    } else if('DD MMMM, yyyy' === moment().subtract(1, 'days').format("DD MMMM, yyyy")) {
        heading = "Yesterday I was grateful for,";
    } else {
        heading = `On, ${props.date} I was grateful for,`
    }

    return <View style={styles.headingContainer}>
        <Text style={styles.text}>{heading}</Text>
    </View>
}
export default Heading