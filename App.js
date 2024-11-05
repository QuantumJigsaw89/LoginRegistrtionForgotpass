// App.js
import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Define the custom blue theme
const blueTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF', // Blue primary color
    accent: '#005BBB',  // Darker blue for accents
    background: '#F0F8FF', // Light blue background
    text: '#005BBB',     // Dark blue text
    surface: '#FFFFFF',  // White surface color for inputs and cards
    error: '#FF5252',    // Red for errors
  },
};

export default function App() {
  return (
    <PaperProvider theme={blueTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
