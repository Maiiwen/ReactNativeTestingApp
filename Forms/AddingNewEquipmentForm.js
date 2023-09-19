import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import * as Location from 'expo-location';
import {DatePickerModal, registerTranslation, fr} from 'react-native-paper-dates'
const RegisterForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [availabilityDate, setAvailabilityDate] = useState("")
    const [displayedAvailabilityDate, setDisplayedAvailabilityDate] = useState("")
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [open, setOpen] = React.useState(false);
    registerTranslation('fr', fr)

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setAvailabilityDate(params.date);
            setDisplayedAvailabilityDate(params.date.toDateString());
        },
        [setOpen, setAvailabilityDate]
    );

    const save = () => {
        console.log(name)
        console.log(description)
        console.log(availabilityDate)
        console.log(location)
    //     send request to API to save equipment
    }




    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location)
        })();
    }, []);
    return (
        <View>
        {/*    name field */}
            <TextInput style={{marginBottom: 10}}
                label="Name"
                value={name}
                onChangeText={value => setName(value)}
            />
        {/*    description field */}
            <TextInput style={{marginBottom: 10}}
                label="Description"
                value={description}
                onChangeText={value => setDescription(value)}
            />
        {/*    availability date field, textinput with button to open DatePickerModal */}
            <TextInput style={{marginBottom: 10}}
                label="Availability date"
                value={displayedAvailabilityDate}
                onFocus={() => setOpen(true)}
            />

            <DatePickerModal
                locale={'en_GB'}
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={availabilityDate}
                onConfirm={onConfirmSingle}
                validRange={{
                    startDate: new Date(),
                }}
            />

        {/*    submit button */}
            <Button icon="account-plus" mode="elevated" onPress={() => save()}>Submit</Button>
        </View>
    );
};

export default RegisterForm;