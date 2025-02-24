# Progetto React + Flask API

Questo progetto utilizza **React** per la parte frontend e **Flask** per fornire un'API che serve dati da un file JSON locale.

Clonare il Repository

Per iniziare, clona questa repository sul tuo computer:

```bash
git clone https://github.com/drahauts/ProjectReact.git nome-repo
cd nome-repo
```

## Struttura del Progetto

### Backend (Flask)

Il backend è costituito dal file `dbJson.py`, che fornisce endpoint per recuperare informazioni sui ricercatori, professori ordinari e associati.

**Dipendenze necessarie:**

- Python 3
- Flask
- Flask-CORS

**Avvio del backend:**

```bash
pip install flask flask-cors  # Installazione delle dipendenze
python dbJson.py  # Avvio del server
```

Il server sarà disponibile su `http://0.0.0.0:5002`.

### Frontend (React)

**Dipendenze necessarie:**

- Node.js
- Vite (per lo sviluppo)

**Avvio del frontend:**

1. Installare Node.js (se necessario)
   ```bash
   nvm install node
   ```
2. Installare le dipendenze
   ```bash
   npm install
   ```
3. Avviare l'applicazione
   ```bash
   npm run dev
   ```

Il frontend sarà disponibile su `http://localhost:5173`.

## API disponibili

- **GET /ricercatori** → Restituisce i ricercatori
- **GET /ordinari** → Restituisce i professori ordinari
- **GET /associati** → Restituisce i professori associati
- **GET /professori** → Restituisce tutti i professori ordinati per posizione
