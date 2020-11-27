import { createStore, compose, applyMiddleware } from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';

declare global {
    interface Window {  
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
        'gratitude',
    ],
    // Blacklist (Don't Save Specific Reducers)
    // blacklist: [
    //   'counterReducer',
    // ],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store:any = createStore(persistedReducer, composedEnhancer(
    applyMiddleware(thunk)
));

export const persistor = persistStore(store);

export default store;