// DoctorDetails.js
import React from 'react';
import { View, Text, FlatList, StyleSheet ,Button} from 'react-native';
import SlotBooking from './SlotBooking';
import Registration from '../Pages/Registration';
const DoctorDetails = ({ navigation, route }) => {
  const { doctor } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialty}>{doctor.specialty}</Text>
      <Text style={styles.availabilityHeader}>Available Time Slots:</Text>
      <FlatList
        data={doctor.availability}
        renderItem={({ item }) => (
          <Text style={styles.timeSlot}>{item.day}: {item.time}</Text>
        )}
        keyExtractor={(item) => item.day}
      />
      {/* Add booking logic here */}
      <Button title="Book slot" onPress={()=>{navigation.navigate('Registration')}} />

      
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
  availabilityHeader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  timeSlot: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DoctorDetails;
