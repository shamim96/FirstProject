import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = ()=>{

    Promise.all([
        Icon.getImageSource("md-map",30),
        Icon.getImageSource("ios-share-alt",30),
        Icon.getImageSource("ios-menu",30)
    ]).then(source=>{
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen : "my-project-places.SharePlace",
                    label : "Share Place",
                    title: "Share Place",
                    icon: source[1],
                    navigatorButtons : {
                        leftButtons : [
                            {
                               icon : source[2],
                               title : "Menu",
                               id : "sideDrawerToogle"
                            }
                        ]
                    }
                },
                {
                    screen : "my-project-places.FindPlace",
                    label : "Find Place",
                    title: "Find Place",
                    icon: source[0],
                    navigatorButtons : {
                        leftButtons : [
                            {
                               icon : source[2],
                               title : "Menu",
                               id : "sideDrawerToogle"
                            }
                        ]
                    }
                }
            ],
            tabsStyle : {
                tabBarSelectedButtonColor: "orange"
            },
            appStyle : {
                tabBarSelectedButtonColor : "orange"
            },
            drawer : {
                left : {
                    screen: "my-project-places.SideDrawer"
                }
            }
        });
    });
}

export default startTabs;