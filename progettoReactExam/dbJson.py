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
    return jsonify(ricercatori)

@app.route('/ordinari')
def visualizzaOrdinari():
    ordinari = [item for item in data if item.get("posizione") == "Professore Ordinario"]
    return jsonify(ordinari)

@app.route('/associati')
def visualizzaAssociati():
    associati = [item for item in data if item.get("posizione") == "Professore Associato"]
    return jsonify(associati)

@app.route('/professori')
def visualizzaProfessori():
    # Можно вернуть все записи или отсортировать по позиции, как тебе удобно
    return jsonify(sorted(data, key=lambda x: x.get("posizione", "")))

if __name__ == '__main__':
    print("Loading....")
    app.run(host="0.0.0.0", port=5002)