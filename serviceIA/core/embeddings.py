import os
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings
from langchain_community.embeddings import HuggingFaceEmbeddings
load_dotenv()

#def get_embedding():
#    return OpenAIEmbeddings(model="text-embedding-3-small",
#                            api_key=os.getenv('GROK_KEY'),
#                            base_url="https://api.groq.com/openai/v1")

def get_embedding():
    return HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )