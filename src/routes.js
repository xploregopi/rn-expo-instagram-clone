// package imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// local imports
import Feed from './pages/Feed';
import Direct from './pages/Direct';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#FFF',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerMode: 'float',
                gestureEnabled: true,
                gestureDirection: 'horizontal'
            }}>
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    options={{ title: 'Feed' }}
                />
                <Stack.Screen
                    name="Direct"
                    component={Direct}
                    options={{ title: 'Direct', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: 'Profile' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
