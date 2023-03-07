import React from "react";
import { 
    View ,
    TouchableOpacity,
    Text,

} from "react-native";

import { Ionicons } from '@expo/vector-icons';

const ProfileOption = ({
    icon,
    title,
    onPress
}) => {
    return(

        <View
            style={{
                marginHorizontal: 16,
                marginVertical: 8,
                paddingBottom: 14,
                borderBottomWidth: 1,
                borderBottomColor: "#6666"
            }}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {icon}
                        <Text
                            style={{
                                fontWeight: "400",
                                fontSize: 16,
                                color: "#666",
                            }}
                        >
                            {title}
                        </Text>
                    </View>
                    <Ionicons name="ios-chevron-forward-outline" size={20} color="#e38b37" />
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default ProfileOption;