from flask import Flask, request, jsonify
from serpapi.google_search import GoogleSearch  # <-- This line might be different!
import os  # Add this

app = Flask(__name__)

def search_google(query):
    params = {
        "q": query,
        "hl": "en",
        "gl": "us",
        "api_key": "e1e28954f506349ca3d8c24026119d9714bdcf62c5c3d0738b182b755035c1b7"  # Replace with your actual API key
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    
    if "organic_results" in results:
        return results["organic_results"][0]["snippet"]
    
    return "No results found."

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify({"error": "No query provided"}), 400
    result = search_google(query)
    return jsonify({"answer": result})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Render requires this
    app.run(host='0.0.0.0', port=port)
