/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Ordinari = () => {
  const [ordinari, setOrdinari] = useState([]);
  const [filteredOrdinari, setFilteredOrdinari] = useState([]); // Фильтрованный список
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState(""); // Стейт для поиска

  const navigate = useNavigate(); 


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5002/ordinari")
      .then((response) => {
        setOrdinari(response.data);
        setFilteredOrdinari(response.data); // Сохраняем копию данных
      })
      .catch((error) =>
        console.error("Errore con ricevimento dati: ", error)
      );
  }, []);

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredOrdinari].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredOrdinari(sortedData);
  };

  useEffect(() => {
    const filtered = ordinari.filter((item) =>
      `${item.nome} ${item.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrdinari(filtered);
  }, [searchTerm, ordinari]);

  return (
    <div className="container mt-5">
      <br />
      <h1 className="text-center mb-4">Professori Ordinari</h1>

      {/* Поле поиска */}
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
            {filteredOrdinari.length > 0 ? (
              filteredOrdinari.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.cognome}</td>
                  <td><span className="salary">{item.stipendio} €</span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">Nessun professore trovato.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
 <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Torna alla Home
        </button>
      </div>
    </div>
  );
};

export default Ordinari;
