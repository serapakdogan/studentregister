import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import StudentsList from './Components/StudentsList';
import StudentCreate from './Components/StudentCreate';
import StudentUpdate from './Components/StudentUpdate';


const RouterComponent = () => {
    return (
        <Router sceneStyle= {{marginTop: 65 }}>
            <Scene key= "Main">

                <Scene 
                key = "loginScreen" 
                component={LoginForm} 
                titleStyle={{textAlign:'center'}} 
                title= " Giriş Ekranı "  />

                <Scene 
                onRight= {() => Actions.studentCreate()}
                rightTitle= "Yeni"
                key = "studentsList" 
                component={StudentsList} 
                title= " Öğrenci Liste" />  
                
                <Scene
                key="studentCreate"
                component={ StudentCreate } 
                title="Öğrenci Liste"
                />

                <Scene
                key="studentUpdate"
                component={ StudentUpdate } 
                title="Öğrenci Güncelle"
                />


            </Scene>
           
    </Router>

    );
}

export default RouterComponent;