import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleLogin = () => {
    if (email && password) {
      setSnackbarMessage('Login successful');
    } else {
      setSnackbarMessage('Please enter both email and password');
    }
    setVisibleSnackbar(true);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
    setSnackbarMessage('Navigating to Registration');
    setVisibleSnackbar(true);
  };

  const handlePasswordReset = () => {
    navigation.navigate('ForgotPassword');
    setSnackbarMessage('Navigating to Password Reset');
    setVisibleSnackbar(true);
  };

  return (
    <ImageBackground source={require('../assets/image.jpg')} style={styles.background}>
      <LinearGradient
        colors={['rgba(0, 123, 255, 0.6)', 'rgba(240, 248, 255, 0.8)']}
        style={styles.gradientOverlay}
      >
        <View style={styles.container}>
          {/* Profile Icon */}
          <Image
            source={require('../assets/profile.png')}
            style={styles.profileIcon}
          />

          <Text variant="headlineMedium" style={styles.titleText}>
            Welcome to App Ni Siya
          </Text>
          <Text variant="bodyMedium" style={styles.subText}>
            Log in to continue
          </Text>

          {/* Email Input */}
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            placeholder="example@gmail.com"
            left={<TextInput.Icon icon="email" />}
            theme={{ colors: { primary: '#007bff' } }}
            outlineColor="#007bff"
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            placeholder="Enter your password"
            left={<TextInput.Icon icon="lock" />}
            theme={{ colors: { primary: '#007bff' } }}
            outlineColor="#007bff"
          />

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}
            contentStyle={styles.loginButtonContent}
            color="#007bff"
          >
            Log In
          </Button>

          {/* Register & Forgot Password Links */}
          <View style={styles.linkContainer}>
            <Button onPress={handleRegister} style={styles.linkButton} labelStyle={styles.linkText}>
              Don't have an account? Register
            </Button>
            <Button onPress={handlePasswordReset} style={styles.linkButton} labelStyle={styles.linkText}>
              Forgot Password?
            </Button>
          </View>

          {/* Snackbar */}
          <Snackbar
            visible={visibleSnackbar}
            onDismiss={() => setVisibleSnackbar(false)}
            duration={Snackbar.DURATION_SHORT}
            style={styles.snackbar}
          >
            {snackbarMessage}
          </Snackbar>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100',          
    height: '115%',          
    justifyContent: 'center',
    resizeMode: 'cover',    
  },
  gradientOverlay: {
    width: '120%',           
    height: height * 0.9,    
    alignSelf: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.04,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: width * 0.06,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginHorizontal: width * 0.08,
    borderRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  profileIcon: {
    alignSelf: 'center',
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    marginBottom: height * 0.02,
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
    marginBottom: height * 0.04,
    fontSize: width * 0.045,
  },
  input: {
    marginBottom: height * 0.02,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  loginButton: {
    borderRadius: 8,
    marginBottom: height * 0.03,
    elevation: 3,
    shadowColor: '#007bff',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  loginButtonContent: {
    paddingVertical: height * 0.015,
  },
  linkContainer: {
    marginTop: height * 0.02,
  },
  linkButton: {
    alignSelf: 'center',
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: width * 0.045,
  },
  snackbar: {
    backgroundColor: '#003366',
    borderRadius: 10,
    elevation: 10,
  },
});
