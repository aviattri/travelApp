import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {COLORS, SIZES, icons} from './app/constants/index';

// screens
import {Onboarding, DestinationDetail} from './app/screens/index';
// tabs
import Tabs from './app/navigation/tabs';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initalRouteName={'Onboarding'}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{marginRight: SIZES.padding}}
                  onPress={() => {
                    console.log('Pressed');
                  }}>
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: ({onPress}) => (
              <TouchableOpacity
                style={{marginRight: SIZES.radius}}
                onPress={onPress}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="DestinationDetail" component={DestinationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
