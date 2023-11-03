
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AppointmentSlot = ({navigation}) => {
  const [slots, setSlots] = useState([
    { time: '10:00 AM', selected: false },
    { time: '11:00 AM', selected: false },
    { time: '12:00 PM', selected: false },
    // Add more slots as needed
  ]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelection = (index) => {
    if (!slots[index].selected) {
      const updatedSlots = [...slots];
      updatedSlots[index].selected = true;
      setSlots(updatedSlots);
      setSelectedSlot(updatedSlots[index]);
    }
  };

  const handleConfirmAppointment = () => {
    if (selectedSlot) {
      // Handle sending a confirmation email here, e.g., by integrating with a backend service.
      // For demonstration purposes, we'll show an alert message.
      Alert.alert('Appointment Confirmed', `You have booked the slot at ${selectedSlot.time}`);
    } else {
      Alert.alert('No Slot Selected', 'Please select a slot before confirming.');
    }
   navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select an Appointment Slot</Text>
        {
            slots.map((slot, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.slot, slot.selected ? styles.selectedSlot : null]}
                  disabled={slot.selected}
                  onPress={() => handleSlotSelection(index)}
                >
                  <Text style={styles.slotText}>{slot.time}</Text>
                </TouchableOpacity>
              ))
        }
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmAppointment}>
        <Text style={styles.confirmButtonText}>Confirm Slot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  slot: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedSlot: {
    backgroundColor: 'gray',
  },
  slotText: {
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentSlot;
