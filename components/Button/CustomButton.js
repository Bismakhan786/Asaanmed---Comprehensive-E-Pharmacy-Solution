import React from "react";
import { 
    Text,
    TouchableOpacity,
} from "react-native";

const CustomButton = ({
    label,
    onPressFunction
}) => {
    return(
        <TouchableOpacity
            onPress={onPressFunction}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#e38b37",
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 10,
                marginHorizontal: 10
            }}
        >
        <Text
                style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: 'bold',
                    textTransform: 'capitalize'
                }}
            >
                {label}
            </Text>
            
        </TouchableOpacity>
    )
}

export default CustomButton;