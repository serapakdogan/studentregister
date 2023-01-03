import React, { Component } from "react";
import { Provider } from 'react-redux';
import { initializeApp } from '@react-native-firebase/app';
import { firebase } from "@react-native-firebase/auth";
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//loginformu import etmemize gerek yok router ın içinden çağırmış olduk.
import Router from './Router';



class Main extends Component {
    
    render() {

        const firebaseConfig = {
            apiKey: 'AIzaSyCIW-DnP0_NiFHqxXwh0LzlIYMabhzHnpQ',
            authDomain: 'new-project-951af.firebaseapp.com',
            projectId: 'new-project-951af',
            storageBucket: 'new-project-951af.appspot.com',
            messagingSenderId: '553996963741',
            appId: '1:553996963741:web:275917c44b66bf5162a974'
        };

        const app = firebase.initializeApp(firebaseConfig);
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
              <Router />
            </Provider>
        );
    }
}
export default Main;
