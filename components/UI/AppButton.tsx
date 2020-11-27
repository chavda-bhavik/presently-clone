import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

interface props {
    onPress?: Function,
    title: string,
    containerStyle?: Object,
    textStyle?: Object
}

const AppButton = ({ onPress, title, containerStyle, textStyle }:props) => {
    
    let touchableOpacityProps:any = {};
    if(onPress) {
        touchableOpacityProps.onPress = onPress;
    }

    touchableOpacityProps.style = styles.appButtonContainer
    if(containerStyle) {
        touchableOpacityProps.style = containerStyle;
    }

    return (
        <TouchableOpacity {...touchableOpacityProps}>
            <Text style={ textStyle ? textStyle : styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
};

export default AppButton