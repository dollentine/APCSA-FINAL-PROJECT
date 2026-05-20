import os
import requests 
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")
if not API_KEY:
    raise ValueError("Missing OPENROUTER_API_KEY")

URL = "https://openrouter.ai/api/v1/chat/completions"

def ask_ai(prompt):
    payload = {
        "model": "openai/gpt-4o-mini",
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }


    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(URL, headers=headers, json=payload)


    if response.status_code != 200:
        print("Error:", response.status_code)
        print(response.text)
        return None


    return response.json()["choices"][0]["message"]["content"]


print("AI Chat ready! Type 'exit' to quit.\n")


while True:
    user_input = input("You: ")


    if user_input.lower() in ["exit", "quit"]:
        break


    reply = ask_ai(user_input)


    if reply:
        print("\nAI:", reply, "\n")
