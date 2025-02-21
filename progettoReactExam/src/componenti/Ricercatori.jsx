/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Professori.css"; 
import { useNavigate } from "react-router-dom";

const Ricercatori = () => {
  const [ricercatori, setRicercatori] = useState([]);
  const [filteredRicercatori, setFilteredRicercatori] = useState([]); // Отфильтрованные данные
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState(""); // Стейт для поиска
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5002/ricercatori")
      .then((response) => {
        setRicercatori(response.data);
        setFilteredRicercatori(response.data); // Заполняем отфильтрованный массив сразу
      })
      .catch((error) =>
        console.error("Ошибка при получении данных о Ricercatori:", error)
      );
  }, []);


  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredRicercatori].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredRicercatori(sortedData);
  };

  // Фильтрация данных по имени и фамилии
  useEffect(() => {
    const filtered = ricercatori.filter((item) =>
      `${item.nome} ${item.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRicercatori(filtered);
  }, [searchTerm, ricercatori]);

  return (
    <div className="container mt-5">
      <br />
      <h1 className="text-center mb-4">Ricercatori</h1>

      {/* Поле ввода для поиска */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cerca per nome e cognome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th onClick={() => sortData("nome")}>
                Nome {sortConfig.key === "nome" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => sortData("cognome")}>
                Cognome {sortConfig.key === "cognome" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => sortData("stipendio")}>
                Stipendio (€) {sortConfig.key === "stipendio" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRicercatori.length > 0 ? (
              filteredRicercatori.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.cognome}</td>
                  <td>
                    <span className="salary">{item.stipendio} €</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  Nessun professore trovato.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Torna alla Home
        </button>
      </div><br />
    </div>
  );
};

export default Ricercatori;
