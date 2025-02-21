from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Загружаем данные из файла при старте приложения
with open("db.json", "r") as f:
    data = json.load(f)

@app.route('/ricercatori')
def visualizzaRicercatori():
    # Фильтруем записи, где позиция равна "Ricercatore"
    ricercatori = [item for item in data if item.get("posizione") == "Ricercatore"]
    primi_6 = ricercatori[:6]
    return jsonify(primi_6)


@app.route('/ordinari')
def visualizzaOrdinari():
    ordinari = [item for item in data if item.get("posizione") == "Professore Ordinario"]
    primi_6 = ordinari[:6]
    return jsonify(primi_6)

@app.route('/associati')
def visualizzaAssociati():
    associati = [item for item in data if item.get("posizione") == "Professore Associato"]
    primi_6 = associati[:6]
    return jsonify(primi_6)

@app.route('/professori')
def visualizzaProfessori():
    # Ordina i dati in base alla posizione (se serve) e prende solo i primi 6
    primi_6_professori = sorted(data, key=lambda x: x.get("posizione", ""))[:6]
    
    return jsonify(primi_6_professori)


if __name__ == '__main__':
    print("Loading....")
    app.run(host="0.0.0.0", port=5002)