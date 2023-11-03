import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle saving user information to the backend or storage.
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally, reset the form fields to their previous values.
  };

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={user.name}
            onChangeText={(text) => handleChange('name', text)}
          />
        ) : (
          <Text style={styles.infoText}>{user.name}</Text>
        )}
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={user.email}
            onChangeText={(text) => handleChange('email', text)}
          />
        ) : (
          <Text style={styles.infoText}>{user.email}</Text>
        )}
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Phone Number:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={user.phoneNumber}
            onChangeText={(text) => handleChange('phoneNumber', text)}
          />
        ) : (
          <Text style={styles.infoText}>{user.phoneNumber}</Text>
        )}
      </View>
      {isEditing ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}
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
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    margin: 5,
  },
});

export default UserProfile;
