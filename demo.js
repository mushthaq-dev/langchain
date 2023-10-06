import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config();

const template = "What is the capital of {place}?";

const promptTemplate = new PromptTemplate({
    template: template,
    inputVariables: ["place"],
});

const model = new OpenAI({
  temperature: 0.9,
});

const chain = new LLMChain({
    llm: model,
    prompt: promptTemplate,
  });

const res = await chain.call({
    place: "India",
});

console.log(res);

// const res = await model.predict(
//     "what is the capital of france?"
// );

// console.log(res);