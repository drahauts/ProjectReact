/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Professori.css";
import { useNavigate } from "react-router-dom";


const Professori = () => {
  const [professori, setProfessori] = useState([]);
  const [filteredProfessori, setFilteredProfessori] = useState([]); // Отфильтрованные данные
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState(""); // Стейт для поиска

  const navigate = useNavigate(); 


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5002/professori")
      .then((response) => {
        setProfessori(response.data);
        setFilteredProfessori(response.data);
      })
      .catch((error) => console.error("Errore con ricevimento dati: ", error));
  }, []);

  // Функция сортировки
  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredProfessori].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredProfessori(sortedData);
  };

  useEffect(() => {
    const filtered = professori.filter((item) =>
      `${item.nome} ${item.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfessori(filtered);
  }, [searchTerm, professori]);

  return (
    <div className="container mt-5">
      <br />
      <h1 className="text-center mb-4">Professori</h1>


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
              <th>Posizione</th>
              <th onClick={() => sortData("stipendio")}>
                Stipendio (€) {sortConfig.key === "stipendio" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProfessori.length > 0 ? (
              filteredProfessori.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.cognome}</td>
                  <td>{item.posizione}</td>
                  <td>
                    <span className="salary">{item.stipendio} €</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
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

export default Professori;
