
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Restaurants, Favorites } from "./pages"

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="RestaurantPage" >
        <Tab.Screen name="FavoritesPage" component={Favorites} />
        <Tab.Screen name="RestaurantPage" component={Restaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;