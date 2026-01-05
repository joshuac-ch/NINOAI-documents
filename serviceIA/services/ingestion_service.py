from loaders.pdf_loader import load_and_split_pdgf
from core.vecstore import save_vecstore

def ingest_pdf(document_id:str,file_path:str):
    docs=load_and_split_pdgf(file_path)
    save_vecstore(docs,document_id)