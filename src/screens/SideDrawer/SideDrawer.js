import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class SideDrawer extends Component {
    render() {
        return (
            <View style={[Styles.container, { width: Dimensions.get("window").width * 0.8 }]}>
                <TouchableOpacity>
                <View style={Styles.menuItem}>
                        <Text style={Styles.marginRight10}>Side Drawer </Text>
                        <Icon color="#000" name={Platform.OS === "android"?"md-log-out":"ios-log-out"} size={30} />
                </View> 
                </TouchableOpacity>
            </View>

        )
    }
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 10,
        backgroundColor: "white",
        flex: 1
    },
    menuItem : {
        marginTop: 30,
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#ccc",
        alignItems : "center"
    },
    marginRight10 : {
        marginRight : 10
    }
})

export default SideDrawer