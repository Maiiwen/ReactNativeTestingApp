import {Text, TextInput, useTheme} from "react-native-paper";
import {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import ErrorText from "./ErrorText";

const PasswordField = ({
                           label,
                           minLength = 8,
                           maxLength = 255,
                           isNumRequired = true,
                           isSpecialCharRequired = true,
                           isMajRequired = true,
                           isMinRequired = true,
                           minNum = 1,
                           minSpecialChar = 1,
                           minMaj = 1,
                           minMin = 1,
                           password,
                           setPassword,
                           confirmPassword,
                           verifyPassword = true,
                       }) => {
    const theme = useTheme();
    const [modified, setModified] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const handlePasswordChange = (password) => {
        if (verifyPassword) {
            let errors = handlePasswordValidation(password);
            if (errors.length > 0) {
                setPasswordError("The password must \n" + handlePasswordValidation(password).join("\n"));
                setIsPasswordValid(false);
            } else {
                setPasswordError("");
                setIsPasswordValid(true);
            }
        }

    }

    const handlePasswordValidation = (password) => {
        let errors = []

        if (modified) {
            if (confirmPassword) {
                if (password !== confirmPassword) {
                    errors.push("Passwords don't match")
                }
            } else {

                if (password?.length < minLength) {
                    setIsPasswordValid(false);
                    errors.push(`- be at least ${minLength} characters long`);
                }
                if (password.length > maxLength) {
                    setIsPasswordValid(false);
                    errors.push(`- be at most ${maxLength} characters long`);
                }
                if (isNumRequired && !/\d/.test(password)) {
                    setIsPasswordValid(false);
                    errors.push(`- contain at least ${minNum} number`);
                }
                if (isSpecialCharRequired && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
                    setIsPasswordValid(false);
                    errors.push(`- contain at least ${minSpecialChar} special character`);
                }
                if (isMajRequired && !/[A-Z]/.test(password)) {
                    setIsPasswordValid(false);
                    errors.push(`- contain at least ${minMaj} uppercase character`);
                }
                if (isMinRequired && !/[a-z]/.test(password)) {
                    setIsPasswordValid(false);
                    errors.push(`- contain at least ${minMin} lowercase character`);
                }
            }
        }
        setModified(true)


        return errors;
    }

    useEffect(() => {
        handlePasswordChange(password);
    }, [password]);

    return (
        <View>
            <TextInput
                label={label}
                value={password}
                onChangeText={password => setPassword(password)}
                error={!isPasswordValid}
                secureTextEntry={isPasswordVisible}
                right={<TextInput.Icon onPress={() => setIsPasswordVisible(!isPasswordVisible)} icon="eye"/>}
            ></TextInput>
            <Text>{passwordError}</Text>
        </View>
    );
};

export default PasswordField;