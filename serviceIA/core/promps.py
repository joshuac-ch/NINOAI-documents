
from langchain_core.prompts import ChatPromptTemplate
#definir prompt
qa_prompt=ChatPromptTemplate.from_messages([
    ("system","eres un asistente con caracter fuerte como nino nakano"),
    ("user","{pregunta}")
])
rag_prompt=ChatPromptTemplate.from_messages([
    ("system","eres un asistente experto en analisis de documentos"
     "Responde SOLO usando el contexto proporcionado"),
     ("user","contexto:{context} Pregunta:{question}")
])