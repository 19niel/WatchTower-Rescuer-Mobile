// components/Login.jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker component

const Login = ({ onLogin }) => {
  const [selectedUnit, setSelectedUnit] = useState(''); // State for selected unit

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.heading}>Welcome to WatchTower</Text>

      {/* Dropdown for selecting unit */}
      <Picker
        selectedValue={selectedUnit}
        onValueChange={(itemValue) => setSelectedUnit(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Unit" value="" />
        <Picker.Item label="Fire Unit" value="Fire Unit" />
        <Picker.Item label="Typhoon Unit" value="Typhoon Unit" />
        <Picker.Item label="Emergency Unit" value="Emergency Unit" />
      </Picker>

      <Button title="Enter" onPress={() => onLogin()} disabled={!selectedUnit} />
      {/* Button is disabled until a unit is selected */}
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
});

export default Login;
