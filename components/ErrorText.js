import {Text} from "react-native-paper";
import styleSheet from "react-native-web/src/exports/StyleSheet";

const ErrorText = (error) => {
    const style = styleSheet.create({
        error: {
            color: "red",
        }
    });
    return (
        <Text style={style.error}>{error}</Text>
    );
};

export default ErrorText;