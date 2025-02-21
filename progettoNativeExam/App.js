import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "./componenti/Home";
import Professori from "./componenti/Professori";
import Ordinari from "./componenti/Ordinari";
import Associato from "./componenti/Associato";
import Ricercatori from "./componenti/Ricercatori";

const Stack = createStackNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: "#9b2f2f",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: "white"}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Professori")}>
        <Text style={{ color: "white" }}>Professori</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ordinari")}>
        <Text style={{ color: "white" }}>Ordinari</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Associato")}>
        <Text style={{ color: "white" }}>Associati</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ricercatori")}>
        <Text style={{ color: "white" }}>Ricercatori</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />,
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Professori" component={Professori} />
        <Stack.Screen name="Ordinari" component={Ordinari} />
        <Stack.Screen name="Associato" component={Associato} />
        <Stack.Screen name="Ricercatori" component={Ricercatori} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
