import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()
#definir modelo
def get_llm():
    return ChatOpenAI(model="llama-3.1-8b-instant",
                      base_url="https://api.groq.com/openai/v1",
                      api_key=os.getenv('GROK_KEY'))