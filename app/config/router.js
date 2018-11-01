import React from "react";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  Header,
  DrawerItems
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { NavigationComponent } from "react-native-material-bottom-navigation-performance";
import { Drawer, Avatar } from "react-native-material-ui";

import {
  Image,
  Button,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Text
} from "react-native";

import One from "../screens/One";
import Two from "../screens/Two";
import Three from "../screens/Three";
import ViroSample from "../screens/ViroSample";
import SideMenu from "../screens/SideMenu";
import Login from "../screens/Login";
import Exchange from "../screens/Exchange";
import RequestDetail from "../screens/RequestDetail";

/*
//StackNavigator for login related screens like login, register and password reset.
export const LoginStack = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login"
      }
    },
    Registration: {
      screen: Registration,
      navigationOptions: {
        title: "Registreren"
      }
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        title: "Wachtwoord veranderen"
      }
    },
    RecoverPassword: {
      screen: RecoverPassword,
      navigationOptions: {
        title: "Wachtwoord vergeten"
      }
    },
    ChangeEmailRequest: {
      screen: ChangeEmailRequest,
      navigationOptions: {
        title: "E-mail adres verandering opvragen"
      }
    },
    ChangeEmail: {
      screen: ChangeEmail,
      navigationOptions: {
        title: "E-mail adres veranderen"
      }
    }
  },
  {
    headerMode: "none"
  }
);

*/
export const OneStack = StackNavigator(
  {
    One: {
      screen: One,
      navigationOptions: {
        title: "One"
      }
    }
  },
  {
    headerMode: "none"
  }
);

export const TwoStack = StackNavigator(
  {
    Two: {
      screen: Two,
      navigationOptions: {
        title: "Two"
      }
    }
  },
  {
    headerMode: "none"
  }
);

export const ThreeStack = StackNavigator(
  {
    Three: {
      screen: Three,
      navigationOptions: {
        title: "Three"
      }
    }
  },
  {
    headerMode: "none"
  }
);

export const FourStack = StackNavigator(
  {
    ViroSample: {
      screen: ViroSample,
      navigationOptions: {
        title: "Three"
      }
    }
  },
  {
    headerMode: "none"
  }
);

export const ExchangeStack = StackNavigator(
    {
        Exchange: {
            screen: Exchange,
            navigationOptions: {
                title: "Marktplaats"
            }
        },

        RequestDetail: {
            screen: RequestDetail,
            navigationOptions: {
                title: "Marktplaats"
            }
        }
    },
    {
        headerMode: "none"
    }
);

export const LoginStack = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Login"
      }
    }
  },
  {
    headerMode: "none"
  }
);

//TabNavigator for the app when not logged in
export const MyTab = TabNavigator(
  {
    OneStack: {
      screen: OneStack,
      navigationOptions: {
        tabBarLabel: "One",
        tabBarIcon: <Icon size={25} name={"dog"} style={{ color: "grey" }} />
      }
    },
    TwoStack: {
      screen: TwoStack,
      navigationOptions: {
        tabBarLabel: "Two",
        tabBarIcon: <Icon size={25} name={"cat"} style={{ color: "grey" }} />
      }
    },
    ThreeStack: {
      screen: ThreeStack,
      navigationOptions: {
        tabBarLabel: "Three",
        tabBarIcon: <Icon size={25} name={"cow"} style={{ color: "grey" }} />
      }
    },
    ExchangeStack: {
        screen: ExchangeStack,
        navigationOptions: {
            tabBarLabel: "Marktplaats",
            tabBarIcon: <Icon size={25} name={"pig"} style={{ color: "grey" }} />
        }
    }
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: "bottom",
    navigationOptions: ({ naviagtion }) => ({
      tabBarOnPress: (scene, jumpToIndex) => {
        jumpToIndex(scene.index);
      }
    }),
    initialRouteName: "OneStack",
    tabBarOptions: {
      lazy: true,
      bottomNavigationOptions: {
        labelColor: "grey",
        activeLabelColor: "#2196f3",
        rippleColor: "#2196f3",
        tabs: {
          OneStack: {
            activeIcon: (
              <Icon size={25} name={"dog"} style={{ color: "#2196f3" }} />
            )
          },
          TwoStack: {
            activeIcon: (
              <Icon size={25} name={"cat"} style={{ color: "#2196f3" }} />
            )
          },
          ThreeStack: {
            activeIcon: (
              <Icon size={25} name={"cow"} style={{ color: "#2196f3" }} />
            )
          }
        }
      }
    }
  }
);

const MyDrawer = DrawerNavigator(
  {
    MyTab: {
      screen: MyTab
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300
  }
);

export const MyApp = StackNavigator(
  {
    MyDrawer: {
      screen: MyDrawer,
      navigationOptions: {
        header: null
      }
    },
    LoginStack: {
      screen: LoginStack,
      navigationOptions: {
        header: null
      }
    },
    FourStack: {
      screen: FourStack,
      navigationOptions: {
        header: null
      }
    }
  },
  {}
);
