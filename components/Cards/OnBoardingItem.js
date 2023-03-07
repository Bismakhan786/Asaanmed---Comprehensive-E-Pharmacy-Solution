import React from "react";
import { 
    View ,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions
} from "react-native";
import { useRef } from "react";


const OnBoardingItem = ({item}) => {
    
    const { width } = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <Image 
                source={item.image}
                style={[
                    styles.image,
                    {width, resizeMode: 'contain'}
                ]}
            />
            <View style={{flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnBoardingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 0.9,
        justifyContent: 'center'
    },
    title:{
        fontWeight: '800',
        fontSize: 25,
        marginTop: 20,
        marginBottom: 10,
        color: "#7e8090",
        textAlign: 'left',
        paddingHorizontal: 10
    },
    description: {
        fontSize: 16,
        fontWeight: '300',
        color: "#7e8090",
        textAlign: 'left',
        paddingHorizontal: 10,
        lineHeight: 23
    },
})