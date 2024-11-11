// app/login.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Login = ({ onLogin }) => {
  const [selectedUnit, setSelectedUnit] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      {/* Dropdown for selecting unit */}
      <Text style={styles.label}>Select Unit</Text>
      <Picker
        selectedValue={selectedUnit}
        onValueChange={(itemValue) => setSelectedUnit(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Fire Unit" value="fire" />
        <Picker.Item label="Typhoon Unit" value="typhoon" />
        <Picker.Item label="Emergency Unit" value="emergency" />
      </Picker>

      {/* Login button */}
      <Button title="Enter" onPress={() => onLogin(selectedUnit)} />

      {/* Logo Image */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 30, // Adds space between the logo and the button
    resizeMode: 'contain', // Ensures the logo fits within the specified width/height
  },
});

export default Login;
