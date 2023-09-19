import RegisterForm from "../Forms/RegisterForm";
import {Button, Text} from "react-native-paper";
import {View} from "react-native";
import BaseScreen from "./BaseScreen";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();

    return (
        <BaseScreen style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text variant="headlineLarge" style={{textAlign:"center"}}>Who are you ? 👀</Text>
            <RegisterForm></RegisterForm>
            <Button icon="account-plus" mode="elevated" onPress={() => navigation?.push('AddingNewEquipment')}>Register</Button>
        </BaseScreen>
    );
};

export default RegisterScreen;