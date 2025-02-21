import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Card, Button } from "react-native-paper";
import styles from "./style";

const Associato = () => {
  const [associati, setAssociati] = useState([]);
  const [filteredAssociati, setFilteredAssociati] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5002/associati")
      .then((response) => {
        setAssociati(response.data);
        setFilteredAssociati(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore con ricevimento dati: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = associati.filter((item) =>
      `${item.nome} ${item.cognome}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredAssociati(filtered);
  }, [searchTerm, associati]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.ScrollfContainer}>
        <Text style={styles.title}>Professori Associati</Text>
        <TextInput
          style={styles.input}
          placeholder="Cerca per nome o cognome..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />

        {filteredAssociati.length > 0 ? (
          <FlatList
            data={filteredAssociati}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card style={styles.card} pointerEvents="none">
                <Card.Content>
                  <Text style={styles.cardTitle}>
                    {item.nome} {item.cognome}
                  </Text>
                  <Text>Stipendio: {item.stipendio} €</Text>
                </Card.Content>
              </Card>
            )}
            style={{ flexGrow: 1 }}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <Text style={styles.emptyText}>Nessun professore trovato.</Text>
        )}

        <View style={styles.buttonContainer}>
        <Button
  mode="contained"
  onPress={() => navigation.navigate("Home")}
  style={{ backgroundColor: '#9b2f2f' }}
>
  Torna alla Home
</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Associato;