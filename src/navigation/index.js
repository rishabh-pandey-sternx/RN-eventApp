import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import EventDetails from '../screens/EventDetails';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    EventDetails: {
      screen: EventDetails,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
