import {ADD_PLACE, DELETE_PLACE, PLACEINPUT_CHANGE} from './actionTypes'
export const addPlace = (placeName,location) => {
    return {
        type : ADD_PLACE,
        placeName : placeName,
        location : location
    }
}

export const deletePlace = (key) =>{
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}



export const placeInputChange = (value) =>{
    return{
        type: PLACEINPUT_CHANGE,
        value: value
    }
}