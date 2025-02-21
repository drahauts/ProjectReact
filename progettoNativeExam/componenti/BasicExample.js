import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const BasicExample = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={{ backgroundColor: "#6200EE" }}>
      <Appbar.Content title="Accademia" titleStyle={{ color: "white" }} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Professori")}>
          <Text style={styles.link}>Professori</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ordinari")}>
          <Text style={styles.link}>Ordinari</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Associato")}>
          <Text style={styles.link}>Associati</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ricercatori")}>
          <Text style={styles.link}>Ricercatori</Text>
        </TouchableOpacity>
      </View>
    </Appbar.Header>
  );
};

const styles = {
  link: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 16,
  },
};

export default BasicExample;
