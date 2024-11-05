// screens/RegistrationScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function RegistrationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Function to handle registration
  const handleRegister = () => {
    setSnackbarMessage('You are successfully registered');
    setVisibleSnackbar(true);
    
    // Clear inputs after registration
    setName('');
    setEmail('');
    setPassword('');
    
    // Uncomment the following line to navigate to the Login screen after registration
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.titleText}>
        Create Your Account
      </Text>
      <Text variant="bodyMedium" style={styles.subText}>
        Join us and enjoy exclusive features!
      </Text>

      {/* Name Input */}
      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
        placeholder="Enter your full name"
        left={<TextInput.Icon icon="account" />}
        theme={{ colors: { primary: '#007bff' } }}
      />

      {/* Email Input */}
      <TextInput
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        placeholder="example@gmail.com"
        left={<TextInput.Icon icon="email" />}
        theme={{ colors: { primary: '#007bff' } }}
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        placeholder="Create a strong password"
        left={<TextInput.Icon icon="lock" />}
        theme={{ colors: { primary: '#007bff' } }}
      />

      {/* Register Button */}
      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.registerButton}
        contentStyle={styles.buttonContent}
        color="#007bff"
      >
        Register
      </Button>

      {/* Already have an account? Log In */}
      <Button
        onPress={() => navigation.goBack()}
        style={styles.loginButton}
        labelStyle={styles.loginText}
      >
        Already have an account? Log In
      </Button>

      {/* Snackbar for registration confirmation */}
      <Snackbar
        visible={visibleSnackbar}
        onDismiss={() => setVisibleSnackbar(false)}
        duration={Snackbar.DURATION_SHORT}
        style={styles.snackbar}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
}

// Responsive Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: width * 0.06,
    backgroundColor: '#f0f8ff', // Light blue background
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: height * 0.01,
    fontSize: width * 0.07,
  },
  subText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: height * 0.03,
    fontSize: width * 0.045,
  },
  input: {
    marginBottom: height * 0.02,
  },
  registerButton: {
    borderRadius: 8,
    marginBottom: height * 0.03,
    elevation: 2,
  },
  buttonContent: {
    paddingVertical: height * 0.015,
  },
  loginButton: {
    alignSelf: 'center',
  },
  loginText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: width * 0.045,
  },
  snackbar: {
    backgroundColor: '#003366',
  },
});
