import React, {Component} from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {addPlace} from '../../store/actions/index'
import MainText from "../../components/UI/MainText/MainText"
import HeadingText from "../../components/UI/TextHeading/TextHeading"
import PickPlace from '../../components/PickPlace/PickPlace'
import PickLocation from '../../components/PickLocation/PickLocation'
import PlaceInput from '../../components/PlaceInput/PlaceInput'


class  SharePlace extends Component{

  static navigatorStyle = {
    navBarButtonColor : "orange"
  }
  
  state = {
    placeName: "",
    location : null
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  };


    constructor(props){
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = (event) =>{
      if(event.type === "NavBarButtonPress"){
        if(event.id === "sideDrawerToogle"){
          this.props.navigator.toggleDrawer({
            side : "left"
          })
        }
      }
    }

    placeNameChangedHandler = val => {
      this.setState({
        placeName: val
      });
    };
  
    placeAddedHandler = () => {
      if (this.state.placeName.trim() !== "") {
        this.props.onAddPlace(this.state.placeName,this.state.location);
        this.setState({
          placeName : ""
        })
      }else{
        alert("please input some text first")
      }
    };

    locationPickHandler = location =>{
      this.setState(preveState => {
        return {
          ...preveState,
          location: location
        }
      })
    }


    render(){
        return(
          <ScrollView>
            <View style={styles.contentContainer}>
              <View style={{margin:10}}>
                <MainText>
                  <HeadingText>Share a place with us</HeadingText>
                </MainText>
              </View>
             <PickPlace />
              <PickLocation onLocationPick = {this.locationPickHandler} />
              <PlaceInput placeName = {this.state.placeName} onChangeText = {this.placeNameChangedHandler} />
              <View style={styles.button}>
                <Button onPress={this.placeAddedHandler} title="Share the place" />
              </View>
            </View>
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
 
  contentContainer : {
    flex : 1,
    alignItems : "center"
  },
  button : {
    margin: 10
  },
 
})




const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, location) => dispatch(addPlace(placeName,location))
  };
};


export default connect(null,mapDispatchToProps)(SharePlace)
