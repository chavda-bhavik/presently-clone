import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    view: {
        marginVertical: 10,
        paddingLeft: '7%',
        borderLeftColor: '#31352E',
        borderLeftWidth: 3
    },
    heading: {
        fontSize: 30,
        fontWeight: "200",
        fontFamily: 'SERIM',
    },
    content: {
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: 'RobotoSlab'
    }
})

interface ListItemProps {
    id: any
    date: string
    content: String
    onClick: (id:any) => void
}

const ListItem = (props:ListItemProps) => {
    return (
        <TouchableOpacity onPress={() => props.onClick(props.id)} style={styles.view}>
            <Text style={styles.heading}>{props.date}</Text>
            <Text style={styles.content}>{
                ((props.content).length > 20) ? 
                (((props.content).substring(0,20-3)) + '...') : 
                props.content
            }</Text>
        </TouchableOpacity>
    )
}

export default ListItem