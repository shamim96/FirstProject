import React, {Component} from 'react'
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from  'react-redux'
import {deletePlace} from "../../store/actions/index"
import Icon from 'react-native-vector-icons/Ionicons'


class PlaceDetails extends Component{
    placeDeleteHandler = () =>{
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.placeImage} source={this.props.selectedPlace.image} />
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View style={styles.btnDelete}>
                    <TouchableOpacity onPress = {this.placeDeleteHandler}>
                        <Icon name="ios-trash" color="red" size={30} />
                    </TouchableOpacity>
                    
                </View>
            </View>     
        )
    }
    
}
const styles = StyleSheet.create({
    container : {
        margin: 20
    },
    placeImage : {
        width: "100%",
        height: 200
    },
    placeName : {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 28
    },
    btnDelete: {
        alignItems: "center"
    }
});

const mapDispatchToProps = dispatch =>{
  return {
      onDeletePlace : key => dispatch(deletePlace(key))
  }; 
};

export default connect(null,mapDispatchToProps)(PlaceDetails);