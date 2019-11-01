import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import EventDetails from '../screens/EventDetails';

const StackNavigator = createStackNavigator(
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
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AuthNavigator = createStackNavigator(
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

const routes = isLoggedIn =>
  createSwitchNavigator(
    {
      Login: AuthNavigator,
      Home: StackNavigator,
    },
    {
      initialRouteName: isLoggedIn ? 'Home' : 'Login',
    },
  );

export default routes;
