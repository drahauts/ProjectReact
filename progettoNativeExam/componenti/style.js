import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "antiquewhite",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    color: "#9b2f2f",
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    color: "#9b2f2f",
    backgroundColor: "#9b2f2f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
