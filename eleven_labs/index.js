import voice from 'elevenlabs-node';
import fs from 'fs-extra';


const speak = async (text, filename) => {
    voice.textToSpeech(
        process.env.ELEVEN_LABS_XI_API_KEY,
        process.env.ELEVEN_LABS_VOICE_ID,
        filename,
        text
        ).then((res) => {
        console.log(res);
      });
};

export default speak;