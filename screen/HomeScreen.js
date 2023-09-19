import {Text, PaperProvider, useTheme, Button} from "react-native-paper";
import BaseScreen from "./BaseScreen";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
    const navigation = useNavigation();
    let theme = useTheme();
    const [password, setPassword] = useState("")
    useEffect(() => {
        const fun = async () => {
        // get token from AsyncStorage
        // if token is not null, get user info from https://api.escuelajs.co/api/v1/auth/profile and Header with Baerer token
        // if token is null not do anything
        await AsyncStorage.getItem('token').then((value) => {
            if (value) {
                fetch('https://api.escuelajs.co/api/v1/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + value
                    }
                }).then(response => response.json())
                    .then(async data => {
                        console.log(data)
                        if (data.email) {
                            navigation.navigate('HomeLogged')
                        }
                    })
            }
        })
    }
    fun().then(r => console.log(r))

    }, []);

    return (
        <PaperProvider theme={useTheme()}>
            <BaseScreen style={
                {
                    flex: 1,
                    justifyContent: 'center',
                }
            }>
                <Button icon="" mode="outlined" onPress={() => navigation?.push('Login')}>Login</Button>
                <Text style={{textAlign: 'center'}}>You don't have an account ?</Text>
                <Button icon="account-plus" mode="elevated" onPress={() => navigation?.push('Register')}>Sign
                    up</Button>
            </BaseScreen>


        </PaperProvider>
    );
};

export default HomeScreen;