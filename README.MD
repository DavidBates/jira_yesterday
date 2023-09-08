# Jira Standup Generator

Have you ever gotten called on in standup and just went blank with what you did yesterday? Do you feel bad about waisting everyone's time searching for all the Jira tasks you've updated? Well this is the tool for you. 

![StandupGif](https://media4.giphy.com/media/ebEz4dFOqew5SQdjak/giphy.gif?cid=ecf05e47teopozy9j2pixx7bbihk5d1npf92smu90dwv57pg&ep=v1_gifs_related&rid=giphy.gif&ct=g)

This tool uses Jira's API to collect both the tasks you've worked on and the last comment authored by you on that task (in the last day) and then sends it to OpenAI's chat completion API to generate a summary that you could read aloud. This is especially helpful if you are in several different Jira projects throughout the day with overlapping or linked tasks. ChatGPT will do it's best to combine summaries. 

## Setup
This project uses a devcontainer for VSCode You can easily start up the application just by opening the project in VSCode if you have devcontainers and docker installed. 

[Devcontainers getting started](https://code.visualstudio.com/docs/devcontainers/tutorial)


### OpenAI 
All we need from OpenAI is an API key, Using the API from OpenAI ensures that any data you send to it does not get used in training. However, be sure to read your company guidelines on AI use and internal data as this project assumes you have permission to send this information to an external API. 

[How to get your OpenAI API Key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)

### Jira
This project requires a personal access token in order to pull data as though it is you. 

[How to get your JIRA personal access token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

### Finally
Once you have your API keys copy the .env.template as .env and fill in the blanks. If you are using the devcontainer simply run `npm run start` otherwise `npm install` and then `npm run start`... 

Presto! 
