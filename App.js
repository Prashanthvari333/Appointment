import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';
import Login from './src/Pages/Login';
import SignUp from './src/Pages/SignUp';
import Home from './src/Pages/Home';
import DoctorList from './src/Components/DoctorList';
import DoctorDetails from './src/Components/DoctorDetails';
import SlotBooking from './src/Components/SlotBooking';
import Appointment from './src/Components/Appointment';
import BookedSlots from './src/Pages/BookedSlots';
import Registration from './src/Pages/Registration';
import AppointmentSlot from './src/Pages/AppointmentSlot';
import UserProfile from './src/Pages/UserProfile';
import Main from './src/Pages/Main';
const Stack = createStackNavigator();

/*
const App = () => {
  return (
    <BookedSlots/>
  );
};
*/


const App = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      availability: [
        { day: 'Monday', time: '10:00 AM - 12:00 PM' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
        // Add more time slots
      ],
    },
    {
      id: 2,
      name: 'Dr. Mohit',
      specialty: 'physiotherapist',
      availability: [
        { day: 'Monday', time: '10:00 AM - 12:00 PM' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
        // Add more time slots
      ],
    },
    {
      id: 3,
      name: 'Dr. Kalyan',
      specialty: 'Cardiologist',
      availability: [
        { day: 'Monday', time: '10:00 AM - 12:00 PM' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
        // Add more time slots
      ],
    },
    
      // Add more doctor objects here
  ];
  
  
   
  

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DoctorList" options={{ title: 'Doctors' }}>
          {(props) => <DoctorList {...props} doctors={doctors} />}
          </Stack.Screen>
          <Stack.Screen name="DoctorDetails" component={DoctorDetails} options={({ route }) => ({ title: route.params.doctor.name })} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="AppointmentSlot" component={AppointmentSlot} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
