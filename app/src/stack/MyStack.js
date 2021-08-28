import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Login } from '../screens/Login/Login'
import { Register } from '../screens/Register/Register'
import { Home } from '../screens/Home/Home'
import { Events } from '../screens/Events/Events'
import { CalendarView } from '../screens/Calendar/CalendarView'
import { Profile } from '../screens/Profile/Profile'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export const MyStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false        
                    }}
                    listeners={({ navigation }) => ({
                        blur: () => navigation.setParams({ screen: undefined }),
                    })}
                />
                <Stack.Screen 
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                    listeners={({ navigation }) => ({
                        blur: () => navigation.setParams({ screen: undefined }),
                    })}
                />
                <Stack.Screen 
                    name="Tab"
                    options={{
                        headerShown: false                        
                    }}  
                >
                    {
                        () => (
                            <Tab.Navigator 
                                initialRouteName="Home" 
                                barStyle={{ backgroundColor: '#AFE3C0' }}
                                activeColor="#8963BA"
                                inactiveColor="#fff"                                  
                            > 
                                <Tab.Screen 
                                    name="Home"
                                    component={Home}
                                    options={{
                                        tabBarLabel: "Home",
                                        tabBarIcon: ({ color }) => (
                                            <MaterialIcon name="home" color={color} size={26} />
                                        ),                                                                    
                                    }}
                                />
                                <Tab.Screen 
                                    name="Events"
                                    component={Events}
                                    options={{
                                        tabBarLabel: "Events",
                                        tabBarIcon: ({ color }) => (
                                            <MaterialIcon name="calendar-star" color={color} size={26} />
                                        )
                                    }}
                                />
                                <Tab.Screen 
                                    name="Calendar"
                                    component={CalendarView}
                                    options={{
                                        tabBarLabel: "Calendar",
                                        tabBarIcon: ({ color }) => (
                                            <MaterialIcon name="calendar-edit" color={color} size={26} />
                                        )
                                    }}
                                />
                                <Tab.Screen 
                                    name="Profile"
                                    component={Profile}
                                    options={{
                                        tabBarLabel: "Profile",
                                        tabBarIcon: ({ color }) => (
                                            <MaterialIcon name="account" color={color} size={26} />
                                        )
                                    }}                                    
                                />
                            </Tab.Navigator>
                        )
                    }
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}