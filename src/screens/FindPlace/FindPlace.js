import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native'
import PlaceList from "../../components/PlaceList/PlaceList"
import {connect} from "react-redux"


class  FindPlace extends Component{
      constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
      }
      static navigatorStyle = {
        navBarButtonColor : "orange"
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

      state = {
        loadPlacesList : false,
        removeAnim : new Animated.Value(1),
        placesAnim : new Animated.Value(0)

      }

      findPlacesHandler = ()=>{
        Animated.timing(this.state.removeAnim,{
          toValue : 0,
          duration : 1000,
          useNativeDriver : true
        }).start(()=>{
          this.setState({
            loadPlacesList : true
          });
          this.placesLoaderHandler();
        });
      }

      placesLoaderHandler = () =>{
        Animated.timing(this.state.placesAnim,{
          toValue : 1,
          duration : 1000,
          useNativeDriver: true
        }).start();
      }

      placeSelectedHandler = (key) =>{
         const selPlace = this.props.places.find(place =>{
             return place.key === key
         });
          
       this.props.navigator.push({
           screen : "my-project-places.PlaceDetails",
           title : selPlace.name,
           passProps : {
            selectedPlace : selPlace
           }

       });
      }
    
    
    render(){

      let content = (
        <Animated.View 
        style = {{
          opacity : this.state.removeAnim,
          transform : [
            {
              scale : this.state.removeAnim.interpolate({
                inputRange : [0,1],
                outputRange: [12, 1]
              })
            }
          ]
        }}
        >
        <TouchableOpacity onPress={this.findPlacesHandler}>
          <View style = {styles.searchButton}>
            <Text style = {styles.searchButtonText}>Search Places</Text>
          </View>
        </TouchableOpacity>
        </Animated.View>
      )
      if(this.state.loadPlacesList){
        content = (
          <Animated.View style = {{
            opacity : this.state.placesAnim
          }}>
          <PlaceList placeSelectedHandler = {this.placeSelectedHandler} places = {this.props.places} />
          </Animated.View>
        )
      }

        return(
            <View style={!this.state.loadPlacesList ? styles.buttonContainer : null}>
              {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  searchButton : {
    borderWidth : 3,
    borderColor : "orange",
    borderRadius : 50,
    padding : 15,
  
  },
  buttonContainer : {
    flex : 1,
    justifyContent : "center" ,
    alignItems : "center"  
  },
  searchButtonText : {
    color: "orange",
    fontWeight : "bold",
    fontSize : 28,
    
  }
})

const mapStateToProps = state =>{
    return {
      places: state.places.places,
    }
  }
  
 
export default connect(mapStateToProps)(FindPlace)
