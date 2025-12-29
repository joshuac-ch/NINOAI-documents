from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableSequence
from .llm import get_llm
from .promps import qa_prompt
#encademaniento
def get_qa_chain():
    return RunnableSequence(
        qa_prompt,get_llm(),StrOutputParser()
    )