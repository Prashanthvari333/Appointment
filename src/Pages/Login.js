import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import axios from 'axios'; // Import axios for API requests

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // Save the token to secure storage after a successful login
const saveTokenToStorage = async (token) => {
  try {
    await AsyncStorage.setItem('jwtToken', token);
    console.log('Token saved successfully');
  } catch (error) {
    console.error('Error saving token:', error);
  }
};
// Retrieve the token from secure storage when needed
const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};
  const handleLogin = async() => {
    // Implement your login logic here.
    // You can perform authentication, make API requests, etc.
    try {
      const response = await axios.post('http://192.168.29.212:3003/signin',{email,password});

      // Assuming the server returns a token on successful login
    const token = response.data.token;
    console.log(token);

    // Save the token to secure storage
    await saveTokenToStorage(token);

      // Navigate to another screen upon successful login
      navigation.navigate('DoctorList');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        placeholder="Email or Username"

        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder = "password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
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
    fontSize: 40,
    marginBottom: 20,
    color:'black',
    fontFamily:'bold',
  },
  input: {
    color:'red',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontFamily:'bold',
    fontSize:30,

  },
});

export default Login;
