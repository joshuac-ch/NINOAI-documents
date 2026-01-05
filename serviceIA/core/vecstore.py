import os
from langchain_community.vectorstores import faiss
from core.embeddings import get_embedding

BASE_PATH="data/vecstore"

def doc_path(document_id:str):
    return os.path.join(BASE_PATH,document_id)

def save_vecstore(docs,document_id:str):
    path=doc_path(document_id)
    os.makedirs(path,exist_ok=True)
    db=faiss.FAISS.from_documents(docs,get_embedding())
    db.save_local(path)
    return db

def load_vecstore(document_id:str):
    path=doc_path(document_id)
    if not os.path.exists(path):
        return None
    return faiss.FAISS.load_local(path,get_embedding(),allow_dangerous_deserialization=True)