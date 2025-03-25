from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def search_web(query):
    url = f"https://api.duckduckgo.com/?q={query}&format=json"
    response = requests.get(url)
    data = response.json()
    
    if "AbstractText" in data and data["AbstractText"]:
        return data["AbstractText"]
    else:
        return "I couldn't find anything on that."

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')
    if not query:
        return jsonify({"error": "No search query provided"}), 400

    answer = search_web(query)
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
