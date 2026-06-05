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

    print("STATUS:", response.status_code)  # DEBUG

    if response.status_code != 200:
        print("ERROR:", response.text)
        return "AI error"

    return response.json()["choices"][0]["message"]["content"]