import React from 'react'
import {Text,StyleSheet,View} from 'react-native'

const TextHeading = props =>(
        <Text {...props} style={[styles.textHeading,props.style]} >{props.children}</Text>
)

const styles = StyleSheet.create({
    textHeading : {
        fontSize: 28,
        fontWeight : "bold"
    }
})


export default TextHeading 