import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Restaurants, Favorites } from "./pages"
import { reducer, initialState } from "./context"

const Tab = createBottomTabNavigator();
const store = createStore(reducer, initialState);

function Router() {
  return (
    <Provider store={store} >
      <NavigationContainer >
        <Tab.Navigator
          initialRouteName="RestaurantPage"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'FavoritesPage') {
                iconName = "heart"
                  
              } else if (route.name === 'RestaurantPage') {
                iconName = "cutlery"    
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen
                name="FavoritesPage"
                component={Favorites} 
                options={{
                  title: "Favori Mekanlar"
                }}
                />
            <Tab.Screen
                name="RestaurantPage"
                component={Restaurants}
                options={{
                  title: "Restoranlar"
                }}
                />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;