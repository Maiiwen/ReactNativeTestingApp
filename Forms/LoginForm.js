import React, {useState} from 'react';
import {View} from "react-native";
import PasswordField from "../components/PasswordField";
import EmailField from "../components/EmailField";
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigation();
    const login = () => {
        // send request to https://api.escuelajs.co/api/v1/auth/login
        // with email and password
        fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        }).then(response => response.json())
            .then(async data => {
                    // save token in local storage
                    console.log(data)
                    if (data.access_token) {
                        await AsyncStorage.setItem('token', data.access_token)
                        navigate.navigate('HomeLogged')
                    }
                }
            )
    }
    return (
        <View>
            <EmailField
                label={"Email"}
                value={email}
                setValue={setEmail}
                verifyEmail={false}
            ></EmailField>
            <PasswordField
                label={"Password"}
                password={password}
                setPassword={setPassword}
                verifyPassword={false}
            ></PasswordField>
            <Button icon="account-plus" mode="elevated" onPress={() => login()}>Register</Button>

        </View>
    );
};

export default RegisterForm;