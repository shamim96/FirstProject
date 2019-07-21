import React from 'react'
import ListItem from "../ListItem/ListItem";
import {View, FlatList} from "react-native"

const PlaceList = (props) =>{
    return(
        <View style={{width: "100%"}}>
         <FlatList
      data={props.places}
      keyExtractor={(x, i) => i.toString()} 
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage = {info.item.image}
          onPressItem={() => props.placeSelectedHandler(info.item.key)}
        />
      )}
    />
        </View>
    )
}

export default PlaceList;