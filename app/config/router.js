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
import SideMenu from "../screens/SideMenu";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import ProjectDetail from "../screens/ProjectDetail/ProjectDetail";
import Detail from "../screens/ProjectDetail/Detail";
import Updates from "../screens/ProjectDetail/Updates";

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

export const ProfileStack = StackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "Profile"
            }
        }
    },
    {
        headerMode: "none"
    }
);

export const ProjectDetailStack = StackNavigator(
    {
        Project: {
            screen: ProjectDetail,
            navigationOptions: {
                title: "ProjectDetail"
            }
        }
    },
    {
        headerMode: "none"
    }
);

export const DetailStack = StackNavigator(
    {
        Detail: {
            screen: Detail,
            navigationOptions: {
                title: "Detail"
            }
        }
    },
    {
        headerMode: "none"
    }
);

export const UpdatesStack = StackNavigator(
    {
        Updates: {
            screen: Updates,
            navigationOptions: {
                title: "Updates"
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
        ProfileStack: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: <Icon size={25} name={"cat"} style={{ color: "grey" }} />
            }
        },
        ThreeStack: {
            screen: ThreeStack,
            navigationOptions: {
                tabBarLabel: "Three",
                tabBarIcon: <Icon size={25} name={"cow"} style={{ color: "grey" }} />
            }
        }
    },
    {
        tabBarComponent: NavigationComponent,
        tabBarPosition: "bottom",
        swipeEnabled: false,

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
                swipeEnabled: false,

                tabs: {
                    OneStack: {
                        activeIcon: (
                            <Icon size={25} name={"dog"} style={{ color: "#2196f3" }} />
                        )
                    },
                    ProfileStack: {
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


export const DetailTab= TabNavigator(
    {
        DetailStack: {
            screen: DetailStack,
            navigationOptions: {
                tabBarLabel: "Detail",
                tabBarIcon: <Icon size={25} name={"dog"} style={{ color: "grey" }} />
            }
        },
        UpdatesStack: {
            screen: UpdatesStack,
            navigationOptions: {
                tabBarLabel: "Updates",
                tabBarIcon: <Icon size={25} name={"cat"} style={{ color: "grey" }} />
            }
        }
    },
    {
        tabBarComponent: NavigationComponent,
        tabBarPosition: "top",
        swipeEnabled: true,

        navigationOptions: ({ naviagtion }) => ({
            tabBarOnPress: (scene, jumpToIndex) => {
                jumpToIndex(scene.index);
            }
        }),
        initialRouteName: "DetailStack",
        tabBarOptions: {
            lazy: true,
            bottomNavigationOptions: {
                labelColor: "grey",
                activeLabelColor: "#2196f3",
                rippleColor: "#2196f3",
                swipeEnabled: false,

                tabs: {
                    DetailStack: {
                        activeIcon: (
                            <Icon size={25} name={"dog"} style={{ color: "#2196f3" }} />
                        )
                    },
                    UpdatesStack: {
                        activeIcon: (
                            <Icon size={25} name={"cat"} style={{ color: "#2196f3" }} />
                        )
                    },
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
        ProjectDetailStack: {
            screen: ProjectDetail,
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
        TwoStack: {
            screen: TwoStack,
            navigationOptions: {
                header: null
            }
        }
    },


    {}
);
