// DoctorList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DoctorList = ({ doctors, navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('DoctorDetails', { doctor: item });
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={doctors}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()} // Assuming each doctor has a unique ID
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 16,
    color: 'gray',
  },
});

export default DoctorList;
