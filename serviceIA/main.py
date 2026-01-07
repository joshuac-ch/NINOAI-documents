from services.qa import ask_question,ask_document
from services.ingestion_service import ingest_pdf
if __name__=="__main__":
    #res=ask_question("cuando fue la revolucion francesa")
    #print(res)

    document_id="contrato_000001"
    pdf_path="D:/TRABAJO_DEVELOPER_FULL/cv/cvs/CVJoshuaCCH2026PRUEBAS.pdf"    
    ingest_pdf(document_id,pdf_path)
    res=ask_document(document_id,"En que puesto lo pondrias a este chico")
    print(res)