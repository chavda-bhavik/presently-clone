import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, TextInput, View } from "react-native"
import React from 'react';

import colors from './../../color-shemes.json'
import AppButton from '../UI/AppButton'

const styles = StyleSheet.create({
    textAreaContainer: {
        height: '67%',
        backgroundColor: colors.primary.backgroundColor
    },
    textArea: {
        paddingBottom: 20,
        textAlignVertical: 'top',
        fontSize: 20,
        backgroundColor: colors.primary.backgroundColor,
        fontFamily: 'RobotoSlab',
        fontWeight: "bold",
        lineHeight: 25,
        paddingHorizontal: 4
    },
    viewContainer: {
        height: 40,
        backgroundColor: colors.primary.backgroundColor,
        paddingHorizontal: 7,
        justifyContent: 'center'
    },
    buttonContainer: {
        width: '20%',
        height: 35,
        backgroundColor: colors.primary.buttonColor,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 8,
        elevation: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    buttonText: {
        color: colors.primary.textColor,
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'RobotoSlab',
        textTransform: 'uppercase',
    }
})

interface props {
    content: string,
    addJournal: (content:string) => void
}

const GratitudeInput = (props: props) => {
    const [ text, setText ] = useState("");
    
    useEffect( () => {
        setText(props.content)
    }, [])

    const submitJournal = () => {
        props.addJournal(text);
    }

    return (
        <>
            <ScrollView style={styles.textAreaContainer}>
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={10}
                    value={text}
                    onChangeText={ (text) => setText(text) }
                    defaultValue="You can type in me"
                />
            </ScrollView>
            <View style={styles.viewContainer}>
                <AppButton
                    title="Save"
                    containerStyle={styles.buttonContainer}
                    textStyle={styles.buttonText}
                    onPress={submitJournal}
                />
            </View>
        </>
    )
}

export default GratitudeInput