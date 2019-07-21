import React from 'react'
import {TextInput,StyleSheet} from 'react-native'
const DeFaultInput = props =>(
    <TextInput 
        {...props}
        style={[styles.input,props.style, !props.valid && props.touched ? styles.invalid : null ]} 
        underlineColorAndroid="transparent" 
    />
   
)

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 2,
        borderColor: "#ccc",
        padding: 8,
        marginTop: 8,
        marginBottom: 8
    },
    invalid : {
        backgroundColor : "#f9c0c0",
        borderColor : "red"
    }
})


export default DeFaultInput;
