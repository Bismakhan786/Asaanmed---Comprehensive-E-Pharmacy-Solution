import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, View } from "react-native";

const Loading = () => {
    return(
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={30} color={'#e37e38'}/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})