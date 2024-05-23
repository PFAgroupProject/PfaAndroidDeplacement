import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DemandePage = () => {
  const [motif, setMotif] = useState('');
  const [ville, setVille] = useState('');
  const [trans, setTrans] = useState('');
  const [dated, setDated] = useState('');
  const [datef, setDatef] = useState('');
  const [frais, setFrais] = useState('');
  const navigation = useNavigation();

  const handleAjouterDemande = async () => {
    const demandeData = {
      motif,
      ville,
      trans,
      dated,
      datef,
      frais: parseInt(frais),
    };
    
    console.log('Data to be sent:', demandeData);

    try {
      const response = await fetch('http://192.168.127.176:8083/Demandes/Demande', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(demandeData),
      });

      if (response.ok) {
        Alert.alert('Success', 'Demande ajoutée avec succès');
      } else {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        Alert.alert('Error', 'Erreur lors de l\'ajout de la demande');
      }
    } catch (error) {
      console.error('Error adding demande:', error);
      Alert.alert('Error', 'Erreur lors de l\'ajout de la demande');
    }
  };

  const handleAfficherDemande = () => {
    navigation.navigate('AfficherPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une demande</Text>
      <TextInput
        style={styles.input}
        placeholder="Motif"
        value={motif}
        onChangeText={setMotif}
      />
      <TextInput
        style={styles.input}
        placeholder="Ville"
        value={ville}
        onChangeText={setVille}
      />
      <TextInput
        style={styles.input}
        placeholder="Transport"
        value={trans}
        onChangeText={setTrans}
      />
      <TextInput
        style={styles.input}
        placeholder="Date de départ (ISO 8601)"
        value={dated}
        onChangeText={setDated}
      />
      <TextInput
        style={styles.input}
        placeholder="Date de retour (ISO 8601)"
        value={datef}
        onChangeText={setDatef}
      />
      <TextInput
        style={styles.input}
        placeholder="Frais"
        value={frais}
        onChangeText={setFrais}
        keyboardType="numeric"
      />
      <Button title="Ajouter Demande" onPress={handleAjouterDemande} />
      <Button title="Afficher Demande" onPress={handleAfficherDemande} />
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

export default DemandePage;
