from core.chains import get_qa_chain

def ask_question(pregunta:str):
    chain=get_qa_chain()
    return chain.invoke({"pregunta":pregunta})