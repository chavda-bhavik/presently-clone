import { Text, View, StatusBar } from "react-native"
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import colors from './../../color-shemes.json'
import GratitudeInput from './GratitudeInput'
import Heading from "./Heading";
import Slogan from "./Slogan";
import FormContainerProps from "./FormContainer";
import { jounral, store } from "../../global";
import { editJournal } from "../../store/actions/GratitudeActions";
import { SafeAreaView } from "react-native-safe-area-context";

const FormContainer:any = ({ route, navigation }: typeof FormContainerProps) => {
    // navigation.state.params.journalId
    const dispatch = useDispatch();
    let jlist:jounral[], journal: jounral | undefined;
    
    jlist = useSelector( (state:store) => {
        return state.gratitude.journals
    });
    journal = jlist.find( item => item.id === route.params.journalId );

    const addJournal = (content:string) => {
        if(journal?.date) {
            dispatch(editJournal(journal?.date, content));
            navigation.navigate('Home')
        }
    }

    return (
        !journal ? <View><Text>Not found</Text></View>
        : (
            <View style={{ display: "flex", flexDirection: "column", paddingTop: StatusBar.currentHeight, backgroundColor: colors.primary.backgroundColor }}>
                <Heading date={journal?.date} />
                <GratitudeInput content={journal?.content} addJournal={addJournal} />
                <Slogan />
            </View>
        )
    )
}

export default FormContainer