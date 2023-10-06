import { ChatOpenAI } from "langchain/chat_models/openai";
import {ChatPromptTemplate,SystemMessagePromptTemplate,HumanMessagePromptTemplate} from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import * as dotenv from "dotenv";
dotenv.config();
  
  const template = "You are a helpful assistant that translates {input_language} to {output_language}.";
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(template);
  const humanTemplate = "{text}";
  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(humanTemplate);
  
  const chatPrompt = ChatPromptTemplate.fromPromptMessages([systemMessagePrompt, humanMessagePrompt]);

  const chat = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
  });

  const chain = new LLMChain({
    llm: chat,
    prompt: chatPrompt,
  });

  const res = await chain.call({
    input_language: "English",
    output_language: "French",
    text: "I love programming."
  });

  console.log(res);