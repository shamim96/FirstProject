import {Navigation} from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth'
import SharePlace from './src/screens/SharePlace/SharePlace'
import FindPlace from './src/screens/FindPlace/FindPlace'
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import PlaceDetails from './src/screens/PlaceDetails/PlaceDetails'
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

//register screen
Navigation.registerComponent("my-project-places.AuthScreen",()=>AuthScreen, store,Provider);
Navigation.registerComponent("my-project-places.SharePlace",()=>SharePlace, store, Provider);
Navigation.registerComponent("my-project-places.FindPlace",()=>FindPlace, store, Provider);
Navigation.registerComponent("my-project-places.PlaceDetails",()=>PlaceDetails, store, Provider);
Navigation.registerComponent("my-project-places.SideDrawer",()=>SideDrawer)

//start app
Navigation.startSingleScreenApp({
  screen : {
    "screen": "my-project-places.AuthScreen",
    "title" : "Login"
  }
});
