import React from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import { windowWidth } from '../../utils/Dimension';
import { windowHeight } from '../../utils/Dimension';

const Offer =({item}) => {
    return(

        <TouchableOpacity
            style={{
                width: windowWidth * 0.33,
                height: 150,
                borderWidth: 1,
                borderRadius: 15,
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#89e9ea",
                borderColor: "#e4e8eb"
                
            }}
        >   
            <Image
                source={item.image}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 400
                }}
            />
            <Text>{item.title}</Text>
            
    </TouchableOpacity>
    )
}

export default Offer;