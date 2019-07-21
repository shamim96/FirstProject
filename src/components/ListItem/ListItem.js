import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) =>{
   return(
<TouchableOpacity onPress = {props.onPressItem}>
    <View style={styles.ListItem}>
        <Image resizeMode = "cover" style={styles.placeImage} source = {props.placeImage} />
        <Text> 
            {props.placeName} 
        </Text>
    </View>
</TouchableOpacity>
   )};

const styles = StyleSheet.create({
    ListItem : {
        width : "100%",
        padding: 10,
        margin: 5,
        backgroundColor: "#eee",
        flexDirection : "row",
        alignItems : "center"

    },
    placeImage : {
        width : 30,
        height: 30,
        marginRight: 10
    }
});


export default ListItem;