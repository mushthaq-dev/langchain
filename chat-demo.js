import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";

import * as dotenv from "dotenv";
dotenv.config();

const chat = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
});

const result = await chat.generate([
    [
        new SystemMessage(
            "You are helpful assistant that translates English to French."
            ),
        new HumanMessage(
        "Translate this sentence from English to French. I love programming."
        ),
    ],
    [
        new SystemMessage(
            "You are helpful assistant that translates English to Tamil."
            ),
        new HumanMessage(
        "Translate this sentence from English to Tamil. I love programming."
        ),
    ],
]);

console.log(result.generations);