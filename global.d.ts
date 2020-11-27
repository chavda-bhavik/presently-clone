import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface jounral {
    id: any,
    date: string,
    content: string
}

export interface InitialGratitudeState {
    journals:jounral[]
}

export interface store {
    gratitude: {
        journals
    }
}

export type RootStackParamList = {
    Home: undefined;
    Form: { journalId: any };
}