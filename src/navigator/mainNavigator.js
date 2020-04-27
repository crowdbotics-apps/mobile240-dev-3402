import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3125Navigator from '../features/UserProfile3125/navigator';
import EmailAuth3123Navigator from '../features/EmailAuth3123/navigator';
import EmailAuth3121Navigator from '../features/EmailAuth3121/navigator';
import EmailAuth3120Navigator from '../features/EmailAuth3120/navigator';
import EmailAuth3118Navigator from '../features/EmailAuth3118/navigator';
import EmailAuth3057Navigator from '../features/EmailAuth3057/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile3125: { screen: UserProfile3125Navigator },
EmailAuth3123: { screen: EmailAuth3123Navigator },
EmailAuth3121: { screen: EmailAuth3121Navigator },
EmailAuth3120: { screen: EmailAuth3120Navigator },
EmailAuth3118: { screen: EmailAuth3118Navigator },
EmailAuth3057: { screen: EmailAuth3057Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
