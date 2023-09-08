
import OpenAI from "openai";

const get_summary = async (query_str) => {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "Your job is to summarize my daily activity for presentation at standup. I'm an engineer and have output on the Jira projects I've worked on and the last comment I've made. Some Jira updates are from linked projects so if the title is similar you should combine them in the summarization. "
        },
        {
          "role": "user",
          "content": query_str
        }
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  
    return response.choices[0].message.content;
  };
  
  export default get_summary;