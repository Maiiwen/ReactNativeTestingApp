import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';
import LoginScreen from "./screen/LoginScreen";
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {MD3DarkTheme, PaperProvider, useTheme} from "react-native-paper";
import {MD3LightTheme} from "react-native-paper";
import {useMaterial3Theme} from '@pchmn/expo-material3-theme';
import CustomNavigationBar from "./components/CustomNavbar";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screen/HomeScreen";
import RegisterScreen from "./screen/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeLoggedScreen from "./screen/HomeLoggedScreen";
import AddingNewEquipmentScreen from "./screen/AddingNewEquipmentScreen";
import ListEquipmentsScreen from "./screen/ListEquipmentsScreen";

const Stack = createStackNavigator();

export default function Main() {

    const colorScheme = useColorScheme();
    const {theme} = useMaterial3Theme();
    const paperTheme = colorScheme === 'dark' ? {...MD3DarkTheme, colors: theme.dark} : {
        ...MD3LightTheme,
        colors: theme.light
    };

    // use AsyncStorage to check if user is logged
    let isUserLogged = false;
    AsyncStorage.getItem('token').then((value) => {
        if (value !== null) {
            isUserLogged = true;
        }
    });


    const style = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: 20,
            marginRight: 20,

        }
    });

    return (
        <PaperProvider theme={paperTheme}>
            <NavigationContainer theme={paperTheme}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: (props) => <CustomNavigationBar {...props} />,
                    }}>
                    <Stack.Screen name="Home" component={HomeScreen}
                                  options={{title: 'Homepage', displayNavBar: isUserLogged}}/>

                    <Stack.Screen name="Login" label="test" component={LoginScreen}/>
                    <Stack.Screen name="Register" label="test" component={RegisterScreen}/>
                    <Stack.Screen name={"HomeLogged"} component={HomeLoggedScreen} options={{title: 'Home'}}/>
                    <Stack.Screen name={"AddingNewEquipmentScreen"} component={AddingNewEquipmentScreen} options={{title: 'Add new Equipment'}}/>
                    <Stack.Screen name={"ListEquipmentsScreen"} component={ListEquipmentsScreen} options={{title: 'List all equipments'}}/>
                </Stack.Navigator>
            </NavigationContainer>

        </PaperProvider>
    )
}


