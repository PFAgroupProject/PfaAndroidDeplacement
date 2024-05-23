import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://192.168.127.176:8083/Users/User', {
        name,
        lastname,
        email,
        password,
        role,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('LoginPage'); // Redirige vers la page de connexion
      } else {
        Alert.alert('Error', 'Registration failed');
      }
    } catch (err) {
      console.error('Error during sign up:', err);
      Alert.alert('Error', 'Erreur lors de l\'inscription');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>S'inscrire</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={lastname}
        onChangeText={setLastname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Rôle"
        value={role}
        onChangeText={setRole}
      />
      <Button title="S'inscrire" onPress={handleSignUp} />
      <Button title="Retour" onPress={() => navigation.navigate('LoginPage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default SignUpPage;
