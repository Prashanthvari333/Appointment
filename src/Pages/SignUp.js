//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://192.168.29.212:3003/signup',{email,password});
      console.log(response.data)
      // Navigate to another screen upon successful signup
      navigation.navigate('Login');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  // Function to save the token to secure storage
  const saveTokenToStorage = async (token) => {
    try {
      await AsyncStorage.setItem('jwtToken', token);
      console.log('Token saved successfully');
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="green"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="green"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Sign Up" onPress={handleSignUp } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    color:'black',
    fontSize:40,
    fontFamily:'bold',
  },
  input: {
    color:'green',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize:30,
    fontFamily:'bold',
  },
});

export default SignUp;
