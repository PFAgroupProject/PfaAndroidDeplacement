import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const AfficherPage = ({ navigation }) => {
    const [demandes, setDemandes] = useState([]);

    useEffect(() => {
        const fetchDemandes = async () => {
            try {
                const response = await fetch('http://192.168.127.176:8083/Demandes/show');
                const data = await response.json();
                setDemandes(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des demandes :', error);
            }
        };

        fetchDemandes();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des Demandes</Text>
            <FlatList
                data={demandes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.demandeItem}>
                        <Text>Motif: {item.motif}</Text>
                        <Text>Ville: {item.ville}</Text>
                        <Text>Transport: {item.trans}</Text>
                        <Text>Date de départ: {item.dated}</Text>
                        <Text>Date de retour: {item.datef}</Text>
                        <Text>Frais: {item.frais}</Text>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('DemandePage')}
            >
                <Text style={styles.buttonText}>Retour</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    demandeItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AfficherPage;
