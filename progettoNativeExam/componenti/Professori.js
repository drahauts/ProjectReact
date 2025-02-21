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
  styleheet,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Card, Button } from "react-native-paper";
import style from "./style";

const Professori = () => {
  const [professori, setProfessori] = useState([]);
  const [filteredProfessori, setFilteredProfessori] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5002/professori")
      .then((response) => {
        setProfessori(response.data);
        setFilteredProfessori(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore con ricevimento dati: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = professori.filter((item) =>
      `${item.nome} ${item.cognome}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredProfessori(filtered);
  }, [searchTerm, professori]);

  if (loading) {
    return (
      <View style={style.loader}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <ScrollView contentContainerStyle={style.ScrollfContainer}>
        <Text style={style.title}>Professori</Text>
        <TextInput
          style={style.input}
          placeholder="Cerca per nome o cognome..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />

        {filteredProfessori.length > 0 ? (
          <FlatList
          data={filteredProfessori}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={style.card} pointerEvents="none">
              <Card.Content>
                <Text style={style.cardTitle}>
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
          <Text style={style.emptyText}>Nessun professore trovato.</Text>
        )}

        <View style={style.buttonContainer}>
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



export default Professori;
