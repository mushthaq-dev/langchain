import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { ChatAgent } from "langchain/agents";

import * as dotenv from "dotenv";
dotenv.config();

const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        hl: "en",
        gl: "us",
        }),
];

const chat = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo",
});

const agent = ChatAgent.fromLLMAndTools(chat, tools);

const executor = AgentExecutor.fromAgentAndTools({
    agent: agent,
    tools: tools,
});

const res = await executor.run("How many people live in India?");

console.log(res);