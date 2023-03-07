import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    SafeAreaView
} from "react-native";

import { dummyData } from "../constants";

const Splash = ({navigation: {navigate, goBack}}) => {

    setTimeout(() => {
        navigate("OnBoarding")
    }, 3000)
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} hidden={false} backgroundColor="whitesmoke"/>
            <Image
                source={dummyData.company.image}
                style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>{dummyData.company.name}</Text>
        </SafeAreaView>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "whitesmoke",

    },
    imageStyle: {
        width: 100,
        height: 100
    },
    textStyle: {
        fontSize: 30,
        color: "#7e8090"
    }
})