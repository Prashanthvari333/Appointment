import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({navigation}) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here.
    // You can perform authentication, make API requests, etc.

    // Example:
    if (emailOrUsername && password) {
      // Successful login
      alert('Login successful');
    } else {
      // Handle login failure
      alert('Please enter valid credentials');
    }
    navigation.navigate('DoctorList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        placeholder="Email or Username"
        placeholderTextColor="green"
        onChangeText={(text) => setEmailOrUsername(text)}
        value={emailOrUsername}
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
