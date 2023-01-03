
import { firebase } from "@react-native-firebase/database";
import { remove } from "lodash";
import { Actions } from "react-native-router-flux";
import { STUDENT_CHANGED, 
    CREATE_REQUEST,
    CREATE_REQUEST_SUCCES, 
    UPDATE_REQUEST, 
    UPDATE_REQUEST_SUCCES,
    STUDENT_LIST_DATA_SUCCES, 
    DELETE_REQUEST,
    DELETE_REQUEST_SUCCES } from "./types"

export const studentChange = ({ props, value }) => {
    return (dispatch ) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: { props, value}
        });
    };
}

export const studentCreate = ({ isim, soyisim, ogrencinumara, sube }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .push({ isim, soyisim, ogrencinumara, sube })
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCES });
            Actions.pop();
        });
    };
};

export const studentUpdate = ({ isim, soyisim, ogrencinumara, sube, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: UPDATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
        .set({ isim, soyisim, ogrencinumara, sube })
        .then(() => {
            dispatch({ type: UPDATE_REQUEST_SUCCES });
            Actions.pop();
        });
    };
};


export const studentListData = () => { 
    const { currentUser} = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .on('value', snapshot => {
            dispatch( {type: STUDENT_LIST_DATA_SUCCES, payload: snapshot.val() });

        });
    };
};

export const studentDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: DELETE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler/${uid}`)
        .remove ()
        .then(() => {
            dispatch({ type: DELETE_REQUEST_SUCCES });
            Actions.pop();
        });
    };
};

