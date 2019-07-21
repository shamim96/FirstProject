import React, {Component} from "react";
import DefaultInput from  '../UI/DefaultInput/defaultInput'

const PlaceInput = props =>
 (
        <DefaultInput
          value = {props.placeName}
          onChangeText = {props.onChangeText}
          placeholder= "Input place name" 
         />
  )
  



export default PlaceInput;