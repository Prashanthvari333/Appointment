import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// Sample available time slots for a specific day
const availableTimeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

const SlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <View>
      <Text>Select a Date:</Text>
      <FlatList
        data={['2023-09-25', '2023-09-26', '2023-09-27']} // Sample dates
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDateSelect(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
      />

      {selectedDate && (
        <View>
          <Text>Select a Time Slot for {selectedDate}:</Text>
          <FlatList
            data={availableTimeSlots} // Replace with actual available slots
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleTimeSlotSelect(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}

      {selectedTimeSlot && (
        <View>
          <Text>Selected Date: {selectedDate}</Text>
          <Text>Selected Time Slot: {selectedTimeSlot}</Text>
          {/* Add a "Book Appointment" button here */}
        </View>
      )}
    </View>
  );
};

export default SlotBooking;
