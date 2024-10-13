import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TutorList from './screens/TutorList';  // Import the TutorList screen
import TutorDetail from './screens/TutorDetail';  // Import the TutorDetail screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TutorList">
        <Stack.Screen name="TutorList" component={TutorList} options={{ title: 'Tutors' }} />
        <Stack.Screen name="TutorDetail" component={TutorDetail} options={{ title: 'Tutor Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
