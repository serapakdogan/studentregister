import { combineReducers } from 'redux';
import KimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentCreateReducers from './StudentCreateReducers';
import StudentDataReducers from './StudentDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
    KimlikdogrulamaResponse: KimlikdogrulamaReducers,
    studentsListResponse: StudentCreateReducers,
    studentDataResponse: StudentDataReducers,
    studentUpdateResponse: StudentUpdateReducers
    
})