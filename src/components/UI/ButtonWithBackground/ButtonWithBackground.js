import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const ButtonWithBackground = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.bgColor }, props.disabled ? styles.disabled : null]}>
            <Text style={[{ color: props.color },props.disabled ? styles.disabledText : null]}>
                {props.children}
            </Text>
        </View>
    )
    
    if(props.disabled){
        return (
            <View>{content}</View>
        )
    }

    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    }

    return (
        (
            <TouchableOpacity onPress={props.onPress}>
                {content}
            </TouchableOpacity>
        )
    )
}

styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "black"
    },

    disabled : {
        backgroundColor : "#eee",
        borderColor : "#aaa"
    },
    disabledText : {
        color : "#aaa"
    }

})

export default ButtonWithBackground