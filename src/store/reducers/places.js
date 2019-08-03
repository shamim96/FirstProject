import {ADD_PLACE, DELETE_PLACE, PLACEINPUT_CHANGE } from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace : null
}
const reducers = (state = initialState, action) =>{
    switch(action.type){
        case ADD_PLACE :
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image : {
                      uri: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    },
                    location : action.location
                  })
              
                  
            };
        case DELETE_PLACE :
            return {
                ...state,
                places: state.places.filter(place=>{
                    return action.placeKey !== place.key;
                }),
                selectedPlace: null
            };
         
        case PLACEINPUT_CHANGE : {
            return{
                ...state,
                placeName : action.value
            }
        }
        default :
            return state
    }
}

export default reducers;