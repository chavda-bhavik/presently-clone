import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ListItem from './ListItem';
import { useSelector } from "react-redux";
import { jounral, store } from "../../global";
import colors from './../../color-shemes.json'

let styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary.backgroundColor,
        height: "100%",
        paddingHorizontal: 15,
        paddingTop: 3,
    }
});

const ListContainer = ({ navigation }:any) => {
    const list = useSelector( (state:store) => {
        return state.gratitude.journals
    });

    const onClickItem = (id:any) => {
        navigation.navigate('Form', {
            journalId: id
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            {
                list.map( (item:jounral) => <ListItem {...item} key={item.id} onClick={onClickItem} />)
            }
            </ScrollView>
        </View>
    )
}

export default ListContainer