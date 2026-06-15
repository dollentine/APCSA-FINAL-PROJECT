
import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")

if not API_KEY:
    raise ValueError("Missing OPENROUTER_API_KEY")


URL = "https://openrouter.ai/api/v1/chat/completions"


def ask_ai(prompt):

    system_prompt = """
    You are a cute and friendly cooking AI assistant.

    You ONLY answer cooking related questions.

    You help users with:
    - recipes
    - baking
    - cooking tips
    - ingredients
    - food substitutions
    - meal ideas

    Keep responses simple, cute, and easy to understand.
    """

    payload = {

        "model": "openai/gpt-4o-mini",

        "messages": [

            {
                "role": "system",
                "content": system_prompt
            },

            {
                "role": "user",
                "content": prompt
            }

        ]
    }

    headers = {

        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(
        URL,
        headers=headers,
        json=payload
    )

    print("STATUS:", response.status_code)

    if response.status_code != 200:

        print("ERROR:", response.text)

        return "Cooking AI is having problems right now 😭"

    result = response.json()

    return result["choices"][0]["message"]["content"]


