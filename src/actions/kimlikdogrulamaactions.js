import { Alert  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import { EMAIL_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_SUCCES, 
    PASSWORD_CHANGED, 
    LOGIN_USER_FAIL } from './types';

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
}

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    }
}

export const loginUser =({ email, password }) => {
    return (dispatch) => {
        dispatch({ type : LOGIN_USER });
        if( email === '' || password === ''  ) {
            Alert.alert (
                'Mesaj',
                'Her iki alanda dolu olmmalı!',
                [
                    { text: 'Tamam', onPress: () => null }
                ]
            );

        } else {
            auth().signInWithEmailAndPassword( email, password )
                .then(user => loginSucces(dispatch, user))
                .catch(() => loginFail())
        }
    };
};

const loginFail = (dispatch) => {
    Alert.alert (
        'Mesaj',
        'Kullanıcı adı veya şifre yanlış',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginSucces = (dispatch, user) => {
    
    dispatch({
        type: LOGIN_USER_SUCCES,
        payload: user
    });
    Alert.alert (
        'Mesaj',
        'Başarıyla giriş yaptınız',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    Actions.studentsList();
};



//dispatch yapısı main projemizin çinde bulunan provider'lara gönderilen store'ların tetiklenebilmesi için kullanılan yapıyı(reduc thunk) trşkil eder.