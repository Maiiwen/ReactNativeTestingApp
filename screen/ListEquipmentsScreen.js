import {Text, PaperProvider, useTheme, Button} from "react-native-paper";
import BaseScreen from "./BaseScreen";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {Card} from 'react-native-paper';
import {ScrollView} from "react-native";

const HomeScreen = () => {
    const navigation = useNavigation();
    let theme = useTheme();
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        // send request to get all equipments from https://65098e51f6553137159ba73f.mockapi.io/api/v1/equipments
        fetch('https://65098e51f6553137159ba73f.mockapi.io/api/v1/equipments')
            .then(response => response.json())
            .then(data => {
                setEquipments(data)
            })
    }, []);

    let equipmentsList = equipments.map((equipment) => {
        return (
                <Card key={equipment.id} style={{marginBottom:20}}>
                    <Card.Content>
                        <Text variant="titleLarge">{equipment.name}</Text>
                        <Text variant="bodyMedium">{equipment.description}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => (console.log(equipment.location))}>View location</Button>
                    </Card.Actions>
                </Card>



        )
    })

    const [password, setPassword] = useState("")
    return (<PaperProvider theme={useTheme()}>
            <BaseScreen style={{
                flex: 1, justifyContent: 'center',
            }}>
                {/*    display all equipment with cards of paper react native */}
                <ScrollView>
                    {equipmentsList}
                </ScrollView>

            </BaseScreen>


        </PaperProvider>);
};

export default HomeScreen;