# Progetto React Native + Flask API

Questo progetto utilizza **React Native** per la parte mobile e **Flask** per fornire un'API che serve dati da un file JSON locale.

```bash
git clone https://github.com/drahauts/ProjectReact.git nome-repo
cd nome-repo
```


## Struttura del Progetto

### Backend (Flask)
Il backend è lo stesso del primo progetto e si trova nel file `dbJson.py`. Fornisce endpoint per recuperare informazioni sui ricercatori, professori ordinari e associati.

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

### Frontend (React Native)
**Dipendenze necessarie:**
- Node.js
- Expo CLI (per lo sviluppo su mobile)

**Avvio del frontend:**
1. Installare Node.js (se necessario)
   ```bash
   nvm install node
   ```
2. Installare Expo CLI
   ```bash
   npm install -g expo-cli
   ```
3. Installare le dipendenze del progetto
   ```bash
   npm install
   ```
4. Avviare l'applicazione
   ```bash
   npm run web
   ```

## API disponibili
- **GET /ricercatori** → Restituisce i ricercatori
- **GET /ordinari** → Restituisce i professori ordinari
- **GET /associati** → Restituisce i professori associati
- **GET /professori** → Restituisce tutti i professori ordinati per posizione

