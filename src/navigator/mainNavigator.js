import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps107172Navigator from '../features/Maps107172/navigator';
import Add-Item107171Navigator from '../features/Add-Item107171/navigator';
import Maps107167Navigator from '../features/Maps107167/navigator';
import UserProfile107163Navigator from '../features/UserProfile107163/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps107172: { screen: Maps107172Navigator },
Add-Item107171: { screen: Add-Item107171Navigator },
Maps107167: { screen: Maps107167Navigator },
UserProfile107163: { screen: UserProfile107163Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
