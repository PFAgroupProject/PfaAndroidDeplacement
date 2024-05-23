import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './App/LoginPage';
import SignUpPage from './App/SignUpPage';
import DemandePage from './App/DemandePage';
import AfficherPage from './App/AfficherPage';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} />
                <Stack.Screen name="DemandePage" component={DemandePage} />
                <Stack.Screen name="AfficherPage" component={AfficherPage} options={{ title: 'Afficher Demandes' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
