import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const NotificationItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 8,
                    marginVertical: 1,
                    alignItems: 'center'
                }}
            >
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="truck-fast-outline" size={24} color="#826057" />
                </View>
                <View
                    style={{
                        width: "70%",
                        marginHorizontal: 8
                    }}
                >
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                    <Text style={styles.description} numberOfLines={1} ellipsizeMode='tail'>{item.description}</Text>
                </View>
                <View>
                    <Ionicons name="ios-chevron-forward-sharp" size={18} color="#6666" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NotificationItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    icon: {
        padding: 14,
        borderRadius: 40,
        backgroundColor: "#ffdfc1",
        margin: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#38343a"
    },
    description: {
        fontSize: 12,
        color: "#7e8090"
    },
})