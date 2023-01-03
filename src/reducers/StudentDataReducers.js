import { State } from "react-native-gesture-handler";
import {STUDENT_LIST_DATA_SUCCES, CREATE_REQUEST,  CREATE_REQUEST_SUCCES } from "../actions/types";

const INITIAL_STATE = {
    

};

export default ( state= INITIAL_STATE, action ) => {
    switch ( action.type) {
        case STUDENT_LIST_DATA_SUCCES:
            return action.payload;
            default:
                return state;
    }
    
}