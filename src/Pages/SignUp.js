import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Login');
    // Add your signup logic here, such as making an API request to your backend server.
    // You can use libraries like axios or fetch for making API requests.

    // Example API request:
    /*
    fetch('https://example.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, e.g., show success or error messages.
      })
      .catch((error) => {
        // Handle any errors that occur during the request.
        console.error('Error:', error);
      });
    */
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
