import React, { Component } from 'react'
import { View, Image, Button, StyleSheet } from 'react-native'
import placeHolderImage from '../../assets/sea.jpeg'

class PickPlace extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeHolder}>
                    <Image style={styles.placeHolderImage} source={placeHolderImage} />
                </View>
                <View style={styles.button}>
                    <Button onPress={()=>alert('pickup image')} title="Pickup Image" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width: "100%",
        alignItems: "center"
    },
    placeHolder : {
        width : "80%",
        borderWidth: 1,
        borderColor : "black",
        backgroundColor : "#eee",
        height: 150,
        alignItems : "center"
      },
      placeHolderImage : {
        width : "100%",
        height : "100%"
      },
      button : {
        margin: 10
      },
})

export default PickPlace
