// DoctorDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoctorDetails = ({ route }) => {
  // Extract doctor details from the route params
  const { doctor } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialty}>{doctor.specialty}</Text>
      <Text style={styles.phoneNumber}>{doctor.phoneNumber}</Text>
      {/* Add more details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 18,
    color: 'gray',
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 10,
  },
  // Add more styles for additional details
});

export default DoctorDetails;
