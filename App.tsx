import React from 'react';
import store, { persistor } from './store/index'
import { Provider } from "react-redux"
import Home from './Home'
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  )
}