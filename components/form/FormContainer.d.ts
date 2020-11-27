import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../global'

export interface FormContainerProps {
    route: RouteProp<RootStackParamList, 'Form'>,
    navigation: StackNavigationProp<
        RootStackParamList,
        'Form'
    >
}
