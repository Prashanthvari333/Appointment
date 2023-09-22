import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp page
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to the Login page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button title="Login" onPress={handleLogin} />
      </View>
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
    color:'green',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
