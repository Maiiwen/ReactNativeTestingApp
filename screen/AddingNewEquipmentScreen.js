import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Button, Text, TextInput} from "react-native-paper";
import EmailField from "../components/EmailField";
import PasswordField from "../components/PasswordField";
import RegisterForm from "../Forms/RegisterForm";
import BaseScreen from "./BaseScreen";
import LoginForm from "../Forms/LoginForm";
import AddingNewEquipmentForm from "../Forms/AddingNewEquipmentForm";

const AddingNewEquipmentScreen = () => {

    return (
        <BaseScreen style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text variant="headlineLarge" style={{textAlign:"center"}}>Please provide equipment information</Text>
            <AddingNewEquipmentForm></AddingNewEquipmentForm>
        </BaseScreen>
    );
};

export default AddingNewEquipmentScreen;