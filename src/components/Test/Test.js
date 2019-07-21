import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const Test = () =>{
    return(
        <View style={styles.inputContainer}>
        <TextInput placeholder="Write place name here" style={styles.placeInput} onChangeText={props.placeNameChangeHandler} value={props.placeName} />
        <Button onPress={props.placeSubmitHandler} title="Add" style={styles.placeButton} />
      </View>
    )
    const styles = StyleSheet.create({
        inputContainer: {
            //flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        placeInput: {
            width: "70%"
          },
          placeButton: {
            width: "30%"
          }
    });
}

export default Test;