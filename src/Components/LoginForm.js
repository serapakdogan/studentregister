import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Spinner} from '../ortak';


class LoginForm extends Component {
    state= { email: '', password: '', loading: false };
    clickLogin() {
        this.setState({ loading: true});
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }

    renderButton() {
        if (!this.props.loading) {
        return <Button onPress={(this.clickLogin.bind(this))}> GİRİŞ </Button>;
        }
        return <Spinner size="small" />
    }

    render() {
        const { inputStyle } = styles;
        return (
            <View style= {{ flex: 1, backgroundColor: 'white' }}> 
            <Card> 
                <CardSection>
                    <TextInput
                    placeholder="E-mail"
                    style={inputStyle}
                    value={this.props.email}
                    onChangeText={email => this.props.emailChanged(email)}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        secureTextEntry
                        placeholder="Şifre"
                        style={inputStyle}
                        value={this.props.password}
                        onChangeText={password => this.props.passwordChanged(password)}
                        />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            </View>
        );
    }
}

const styles = {

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        alignItems: 'center'
    },

    };

    const mapStateToProps = ({ KimlikdogrulamaResponse  }) => {
        const { email, password, loading } = KimlikdogrulamaResponse;
        return {
            email: 'test@test.com',
            password: '123456',
            loading
        };
    };

    export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm);