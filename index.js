import 'dotenv/config'
import fetchCommentsForAllIssues from './jira/index.js';
import get_summary from './openai/index.js';
import speak from './eleven_labs/index.js';


async function main() {
    const commentsData = await fetchCommentsForAllIssues();
    var updates = Object.values(commentsData);
    var query_str = `---------------\n`;
    query_str += updates.map(function(item) { return `Jira ID: ${item.issueKey}, Title: ${item.title}, Status: ${item.status} Comment: ${item.comments ? item.comments[item.comments.length -1] : ""}`; }).join("\n");
    query_str += `---------------\n`;
    const ai_summary = await get_summary(query_str);
    if(process.env.ELEVEN_LABS_XI_API_KEY) {
        const now = new Date();
        const filename = `${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}-${now.getFullYear().toString().slice(-2)}_standup.mp3`;
        await speak(ai_summary, filename);
    }
    console.log(ai_summary)
    console.log(query_str)
}

main();
