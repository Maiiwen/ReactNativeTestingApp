import {View, StyleSheet} from "react-native";
import {Text, PaperProvider, useTheme, Button} from "react-native-paper";
import PasswordField from "../components/PasswordField";
import BaseScreen from "./BaseScreen";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const HomeLoggedScreen = () => {
    const navigation = useNavigation();
    let theme = useTheme();
    const [password, setPassword] = useState("")
    return (
        <PaperProvider theme={useTheme()}>
            <BaseScreen style={
                {
                    flex: 1,
                    justifyContent: 'center',
                }
            }>
                <Button icon="" mode="outlined" onPress={() => navigation?.push('AddingNewEquipmentScreen')}>Add new Equipment</Button>
                <Button icon="" mode="outlined" onPress={() => navigation?.push('ListEquipmentsScreen')}>List all equipments</Button>
            </BaseScreen>


        </PaperProvider>
    );
};

export default HomeLoggedScreen;