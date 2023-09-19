import {StyleSheet, View} from "react-native";
import {Divider} from "react-native-paper";

const BaseScreen = ({children, style}) => {
    const styles = StyleSheet.create({
        container: {
            ...style,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
        },
    })
    return (
        <>
            <View style={styles.container}>{children}</View>
        </>
    );
};

export default BaseScreen;