import React from 'react';
import {Text} from "react-native-paper";
import BaseScreen from "./BaseScreen";
import LoginForm from "../Forms/LoginForm";

const LoginScreen = () => {

    return (
        <BaseScreen style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text variant="headlineLarge" style={{textAlign:"center"}}></Text>
            <LoginForm></LoginForm>
        </BaseScreen>
    );
};

export default LoginScreen;