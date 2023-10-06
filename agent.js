import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

import * as dotenv from "dotenv";
dotenv.config();

const model = new OpenAI({ temperature: 0 });
const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    hl: "en",
    gl: "us",
  }),
  new Calculator(),
];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
//   verbose: true,
})
console.log("Loaded the agent...")

const input = "What was the high temperature in SF yesterday in Fahrenheit? What is that number raised to the .023 power?";

const result = await executor.call({
  input,
});

console.log(result.output);