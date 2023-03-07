import React, {useState} from "react";
import { 
    View, 
    Text ,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const PsMedItem = ({item}) => {

    const [checkMark, SetCheckMark] = useState(false);

    const setMedicinesForBuying = () => {
        if(checkMark){
            SetCheckMark(false);
            return;
        }
        SetCheckMark(true);
    }

    return(
        <View>
           
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 14,
                    marginHorizontal: 14,
                    padding: 8,
                    borderWidth: 1,
                    borderColor: "#6666",
                    borderRadius: 16
                }}
            >
                
                <View
                    style={{
                        flex: 0.4
                    }}
                >
                    <Image
                        source={item.image}
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 0.6,
                    }}
                >
                    <View
                        style={{
                            marginBottom: 10
                        }}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        
                        <View
                            style={{
                                marginRight: 20
                            }}
                        >
                            <Text style={styles.price}>Rs {item.qty * item.price}</Text>
                        </View>
                        <TouchableOpacity 
                            style={
                                checkMark ? styles.checkMarkSelected : styles.checkMarkUnselected
                            }
                            onPress={setMedicinesForBuying}
                        >
                            <Ionicons name="checkmark-outline" size={16} color="#e7e7e7" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PsMedItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,

    },
    subtitle:{
        fontSize: 12,
        color: "#666"
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "right"
    },
    category: {
        color: "red",
        fontSize: 14,
        fontWeight: '500',
        paddingVertical: 2
    },
    checkMarkSelected: {
        borderRadius: 40,
        padding: 5,
        backgroundColor: "#e38b37",
        borderWidth: 1,
        borderColor: "#e38b37"
    },
    checkMarkUnselected: {
        borderRadius: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: "#e38b37"
    }
})