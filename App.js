import "react-native-gesture-handler"; //Added so that problems don't over during the production mode.

import React from "react";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/setupScreens/home";
import WelcomeScreen from "./screens/setupScreens/welcome";

import OverviewScreen from "./screens/mainScreens/overview";
import FindScreen from "./screens/mainScreens/find";
import DoctorScreen from "./screens/mainScreens/doctors";
import SettingScreen from "./screens/mainScreens/settings";
import DetailScreen from "./screens/mainScreens/details";

import { BackIcon } from "./components/icons/backIcon";
import { HeaderIcon } from "./components/icons/headerIcon";

const MainNavigator = createStackNavigator(
  {
    Start: OverviewScreen,
    Doctor: DoctorScreen,
    Find: FindScreen,
    Details: DetailScreen,
    Settings: SettingScreen,
  },
  {
    initialRouteName: "Start",
    defaultNavigationOptions: {
      headerTitle: "oliva",
      headerTintColor: "#1b3f54",
      headerStyle: {
        height: 100,
      },
      headerTitleStyle: {
        fontSize: 35,
        fontWeight: "500",
        fontFamily: "Open-Sans",
      },
      headerTitleAlign: "left",
      headerBackTitle: "Back",
      headerBackImage: (props) => <BackIcon {...props} />,
      headerBackTitleVisible: false,
      headerLeftContainerStyle: {
        paddingTop: 10,
      },
      headerRight: (props) => <HeaderIcon {...props} />,
    },
  }
);

const BaseNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
    Main: MainNavigator,
  },
  {
    initialRouteName: "Home",
  }
);

const Application = createAppContainer(BaseNavigator);

export default class App extends React.Component {
  render() {
    return <Application />;
  }
}
