import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ImageBackground } from "react-native-web";
import { Image } from "react-native";

import { 
    COLORS, 
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../../constants";

import Ionicons from '@expo/vector-icons/Ionicons';


const CustomDrawer = (props) =>{
    return(
      <View style={{flex:1}}>
        <DrawerContentScrollView 
            {...props} 
            contentContainerStyle={{backgroundColor: "#38343a"}}
        >
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginTop: 80,
                    alignItems: 'center',
                    padding: 20
                }}
            >
                <Image
                    source={dummyData.myProfile.profile_image}
                    style={{
                        width: 50,
                        height: 50, 
                        borderRadius: 40,
                    }}
                />
                <View
                    style={{
                        marginLeft: 20
                    }}
                >
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight: 'bold',
                            color: '#e4e8eb'
                        }}
                    >
                        {dummyData.myProfile.name}
                    </Text>
                    <Text
                        style={{
                            fontSize:14,
                            fontWeight: 'normal',
                            color: '#e4e8eb'
                        }}
                    >
                        View Your Profile
                    </Text>
                </View>
            </TouchableOpacity>
            
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    paddingTop: 10

                }}
            >
                <DrawerItemList {...props}/>
            </View>
       </DrawerContentScrollView>
        <View
            style={{
                padding: 20,
                borderTopWidth: 1,
                borderTopColor: "##826057"
            }}
        >
            <TouchableOpacity
                onPress={()=>{}}
                style={{
                    paddingVertical: 15
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Ionicons name="share-social-outline" size={24} color="#7e8090" />
                    <Text
                        style={{
                            fontSize: 15,
                            marginLeft: 5,
                            color:"#7e8090"
                        }}
                    >
                        Tell a Friend
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=> {}}
                style={{
                    paddingVertical: 15
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Ionicons name="exit-outline" size={24} color="#7e8090" />
                    <Text
                        style={{
                            fontSize: 15,
                            marginLeft: 5,
                            color:"#7e8090"
                        }}
                    >
                        Sign Out
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    )
}

export default CustomDrawer;