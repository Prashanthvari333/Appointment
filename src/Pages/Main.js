import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DoctorList from '../Components/DoctorList';
import UserProfile from './UserProfile';

const Main = ({ navigation }) => {
  return (
      <Button title='Profile' onPress={() => navigation.navigate('UserProfile')} />
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
