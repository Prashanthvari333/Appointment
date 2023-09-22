import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';
import Login from './src/Pages/Login';
import SignUp from './src/Pages/SignUp';
import Home from './src/Pages/Home';
import DoctorList from './src/Components/DoctorList';
import DoctorDetails from './src/Components/DoctorDetails';
const Stack = createStackNavigator();

const App = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', phoneNumber: '123-456-7890' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrician', phoneNumber: '987-654-3210' },
    // Add more doctor objects here
  ];
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DoctorList" options={{ title: 'Doctors' }}>
          {(props) => <DoctorList {...props} doctors={doctors} />}
        </Stack.Screen>
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} options={({ route }) => ({ title: route.params.doctor.name })} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
