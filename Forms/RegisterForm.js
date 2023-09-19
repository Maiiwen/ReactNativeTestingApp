import React, {useState} from 'react';
import {View} from "react-native";
import PasswordField from "../components/PasswordField";
import EmailField from "../components/EmailField";

const RegisterForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <View>
            <EmailField label={"Email"} value={email} setValue={setEmail}></EmailField>
            <PasswordField
                label={"Password"}
                password={password}
                setPassword={setPassword}
            ></PasswordField>
            <PasswordField
                label={"Confirm password"}
                value={confirmPassword}
                setPassword={setConfirmPassword}
                confirmPassword={password}
            ></PasswordField>
        </View>
    );
};

export default RegisterForm;