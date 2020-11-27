import React, { useState, useEffect, useLayoutEffect } from 'react';
import ListContainer from './components/list/ListContainer';
import FormContainer from './components/form/FormContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from "expo-font";
import { AddTodaysJournal } from './store/actions/GratitudeActions';
import { useDispatch } from "react-redux";
import { Text } from 'react-native';

// const Stack = createSwitchNavigator({
//     Home: ListContainer,
//     Form: FormContainer
// }, {
//     initialRouteName: 'Home'
// });
// createAppContainer(Stack)

const Stack = createStackNavigator()

const Home = () => {
    let [ loading, setloading ] = useState(true);
    let dispetch = useDispatch();

    useLayoutEffect( () => {
        dispetch(AddTodaysJournal());
    }, []);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                "RobotoSlab": require("./assets/fonts/RobotoSlab.ttf"),
                "SERIM": require("./assets/fonts/SERIM.ttf"),
                "ValueSerif": require('./assets/fonts/value-serif.ttf')
            })
            setloading(false);
        }
        loadFonts();
    }, [])

    return loading 
    ? <Text>Loading</Text>
    : (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ListContainer} options={{ title: "Home" }} />
                <Stack.Screen name="Form" component={FormContainer} options={{ title: "Form", headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Home;