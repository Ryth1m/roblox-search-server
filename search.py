import os
from flask import Flask, request, jsonify
from serpapi import GoogleSearch

app = Flask(__name__)

def search_google(query):
    params = {
        "q": query,
        "hl": "en",
        "gl": "us",
        "api_key": "e1e28954f506349ca3d8c24026119d9714bdcf62c5c3d0738b182b755035c1b7"
    }
    search = GoogleSearch(params)
    results = search.get_dict()

    print("DEBUG:", results)  # 👀 Debugging line

    if "error" in results:
        return f"API Error: {results['error']}"

    if "organic_results" in results:
        return results["organic_results"][0]["snippet"]

    if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Render sets a dynamic port
    app.run(host='0.0.0.0', port=port)
    
    return "No results found."
