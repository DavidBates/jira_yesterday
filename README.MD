# Jira Standup Generator

Have you ever gotten called on in standup and just went blank with what you did yesterday? Do you feel bad about wasting everyone's time searching for all the Jira tasks you've updated? Well, this is the tool for you. 

![StandupGif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3B0NzZvY2FzbWJ6eWp3bGxqZXE5NjA5ZG94M3dlbmxocGU3Zm00eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ebEz4dFOqew5SQdjak/giphy-downsized-large.gif)

This tool uses Jira's API to collect both the tasks you've worked on and the last comment authored by you on that task (in the last day) and then sends it to OpenAI's chat completion API to generate a summary that you could read aloud. This is especially helpful if you are in several different Jira projects throughout the day with overlapping or linked tasks. ChatGPT will do its best to combine summaries. 

*New* If you don't like public speaking and hate speaking during standup you can now have this generate the audio for you as well! Using ElevenLabs for the most Natural TTS on the market you can even clone your own voice so you don't even have to talk! 

## Setup
This project uses a devcontainer for VSCode You can easily start up the application just by opening the project in VSCode if you have devcontainers and docker installed. 

[Devcontainers getting started](https://code.visualstudio.com/docs/devcontainers/tutorial)


### OpenAI 
All we need from OpenAI is an API key, Using the API from OpenAI ensures that any data you send to it does not get used in training. However, be sure to read your company guidelines on AI use and internal data as this project assumes you have permission to send this information to an external API. 

[How to get your OpenAI API Key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)

### Jira
This project requires a personal access token in order to pull data as though it is you. 

[How to get your JIRA personal access token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

### Eleven Labs (Optional)
This project uses ElevenLabs API to generate an MP3 of the AI summary so now you don't even have to speak! You can even clone your own voice!

[How to get your API key](https://docs.elevenlabs.io/api-reference/quick-start/authentication) then set `ELEVEN_LABS_XI_API_KEY` in your .env


To select the voice you want goto https://elevenlabs.io/voice-library and check out the samples, then call the `/v1/voices` endpoint with your API key [Swagger API Playground](https://api.elevenlabs.io/docs#/voices/Get_voices_v1_voices_get). Get the ID and set `ELEVEN_LABS_VOICE_ID` in your .env

### Finally
Once you have your API keys copy the .env.template as .env and fill in the blanks. If you are using the devcontainer simply run `npm run start` otherwise `npm install` and then `npm run start`... 

Presto! 
