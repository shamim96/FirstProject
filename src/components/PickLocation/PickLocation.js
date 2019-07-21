import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

class PickPlace extends Component {

    state = {
        focusedLocation : {
            latitude : 37.7900352,
            longitude : -122.4013726,
            latitudeDelta : 0.0122,
            longitudeDelta : Dimensions.get('window').width / Dimensions.get('window').height * 0.0122

        }
    }


    render() {
        return (
            <View style={styles.container}>
                <MapView
                style = {styles.map}
                initialRegion = {this.state.focusedLocation}
                />
                <View style={styles.button}>
                    <Button onPress={()=>alert('Locate me')} title="Locate me" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
      width : "100%",
      height : 250
    },
    button: {
        margin: 10
    },
})

export default PickPlace
