import React from "react";
import { 
    View, 
    TextInput ,
    TouchableOpacity,
    Text
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const InputField = ({
    label,
    value = "",
    selectTextOnFocus=false,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
    onChangeText
}) => {
    return(
        <View
            style={{
                flexDirection: 'row',
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25
            }}
        >
            {icon}
            {inputType == 'password' ? (
              <TextInput 
                    placeholder = {label} 
                    selectTextOnFocus={selectTextOnFocus}
                    selectionColor={"lightblue"}
                    keyboardType = {keyboardType}
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        fontSize: 14
                    }}
                    secureTextEntry={true}
                    onChangeText={onChangeText}
                />  
            ) : (
                <TextInput 
                    placeholder = {label}
                    selectionColor={"lightblue"}
                    selectTextOnFocus={selectTextOnFocus}
                    value={value}
                    keyboardType = {keyboardType}
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        fontSize: 14
                    }}
                    onChangeText={onChangeText}
                />
            )}
            <TouchableOpacity
                onPress={fieldButtonFunction}
            >
                <Text
                    style={{
                        color: "red",
                        fontStyle: 'italic'
                    }}
                >
                    {fieldButtonLabel}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputField;