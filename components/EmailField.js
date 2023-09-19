import {Text, TextInput} from "react-native-paper";
import {View} from "react-native";
import {useEffect, useState} from "react";

const EmailField = ({
    label,
    value,
    setValue,
    verifyEmail = true,
                    }) => {
    const [emailError, setEmailError] = useState("")
    useEffect(() => {
        if (value !== "" && verifyEmail) {
            // test if email is valid
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                setEmailError("Email is not valid")
            } else {
                setEmailError("")
            }
        } else {
            setEmailError("")
        }
    }, [value]);

    return (
        <View>
            <TextInput
                label={label}
                value={value}
                onChangeText={value => setValue(value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
            />
            <Text>{emailError}</Text>
        </View>
    );
};

export default EmailField;