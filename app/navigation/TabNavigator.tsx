import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseStackNavigator from './StackNavigator';
import WishlistScreen from '../screens/WishlistScreen';

const Tab = createBottomTabNavigator();

export default function CoursesTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="AllCourses" 
        component={CourseStackNavigator}
        options={{
          title: 'All Courses'
        }}
      />
      <Tab.Screen 
        name="Wishlist" 
        component={WishlistScreen}
        options={{
          title: 'My Wishlist'
        }}
      />
    </Tab.Navigator>
  );
}