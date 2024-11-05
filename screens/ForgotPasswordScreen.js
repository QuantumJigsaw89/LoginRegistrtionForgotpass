// screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Function to handle password reset
  const handlePasswordReset = () => {
    setSnackbarMessage('Password reset link sent to your email');
    setVisibleSnackbar(true);
    setEmail(''); // Clear the email field after reset
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.titleText}>
        Forgot Your Password?
      </Text>
      <Text variant="bodyMedium" style={styles.subText}>
        Enter your email to receive a password reset link.
      </Text>

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

      {/* Reset Password Button */}
      <Button
        mode="contained"
        onPress={handlePasswordReset}
        style={styles.resetButton}
        contentStyle={styles.buttonContent}
        color="#007bff"
      >
        Reset Password
      </Button>

      {/* Back to Login Button */}
      <Button
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        labelStyle={styles.backButtonText}
      >
        Go Back to Login
      </Button>

      {/* Snackbar for password reset confirmation */}
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
    color: '#003366', // Dark blue for title text
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
  resetButton: {
    borderRadius: 8,
    marginBottom: height * 0.03,
    elevation: 2,
  },
  buttonContent: {
    paddingVertical: height * 0.015,
  },
  backButton: {
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: width * 0.045,
  },
  snackbar: {
    backgroundColor: '#003366',
  },
});
