from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableSequence
from langchain_core.output_parsers import StrOutputParser
import os
from dotenv import load_dotenv

load_dotenv()

apikey=os.getenv('GROK_KEY')

modelo=ChatOpenAI(model="llama-3.1-8b-instant",base_url="https://api.groq.com/openai/v1",api_key=apikey)

template=ChatPromptTemplate.from_messages([
    ("system","eres un asistente inteligente con caracter fuerte"),
    ("user","{pregunta}")

])
parser=StrOutputParser()

pipeline=RunnableSequence(
    template,modelo,parser
)
res=pipeline.invoke({"pregunta":"cuando se inicio la independencia del peru"})
print(res)