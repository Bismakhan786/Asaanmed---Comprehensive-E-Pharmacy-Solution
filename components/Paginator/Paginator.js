import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Animated,
    useWindowDimensions
} from "react-native";

const Paginator = ({data, scrollx}) => {

    const {width} = useWindowDimensions();


    return(
        <View style={{flexDirection:'row', height: 64, justifyContent: 'center'}}>
            {data.map((_, i) => {

                const inputRange = [(i - 1) * width, i * width, (i+1)*width];

                const dotWidth = scrollx.interpolate({
                    inputRange,
                    outputRange: [7, 20, 7],
                    extrapolate: 'clamp'
                });

                const opacity = scrollx.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })
                return (
                    <Animated.View 
                        style={[
                            styles.dot, 
                            {
                                width: dotWidth,
                                opacity,
                            }
                        ]}
                        key={i.toString()}
                    />
                )
            })}
        </View>
    )
}

export default Paginator;

const styles = StyleSheet.create({
    dot:{
        width: 10,
        height: 4,
        borderRadius: 5,
        backgroundColor: "#7e8090",
        marginHorizontal: 4,
    }
})