import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Img from './Img';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.cardsContainer}>
        <CustomCard title="Professori" text="Lista di tutti i professori" path="Professori" />
        <CustomCard title="Ordinari" text="Lista dei professori ordinari" path="Ordinari" />
        <CustomCard title="Associati" text="Lista dei professori associati" path="Associato" />
        <CustomCard title="Ricercatori" text="Lista dei ricercatori" path="Ricercatori" />
      </View>
    </ScrollView>
  );
};

const CustomCard = ({ title, text, path }) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => navigation.navigate(path)}
            style={{ backgroundColor: '#9b2f2f' }}
>
          Vai
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: "center", padding: 20, backgroundColor: "antiquewhite" },
  imageContainer: { marginBottom: 20 },
  cardsContainer: { width: "100%" },
  card: { marginBottom: 15, backgroundColor: "#fff" },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardText: { fontSize: 16, color: "#555" },
});

export default Home;
