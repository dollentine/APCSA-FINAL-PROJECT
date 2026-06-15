
from flask import Flask, request, jsonify, render_template
from api import ask_ai

app = Flask(__name__)


# HOME PAGE
@app.route("/")
def home():
    return render_template("index.html")


# CHATBOT PAGE
@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")


# MINIGAMES PAGE
@app.route("/minigames")
def minigames():
    return render_template("minigames.html")


# CHAT API
@app.route("/api/chat", methods=["POST"])
def chat_api():

    try:

        data = request.get_json()

        print("Received:", data)

        message = data.get("message", "")

        response = ask_ai(message)

        return jsonify({
            "response": response
        })

    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "response": "Server Error 😭"
        }), 500


if __name__ == "__main__":

    print("Flask running on http://127.0.0.1:5000")

    app.run(debug=True)



