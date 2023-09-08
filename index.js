import 'dotenv/config'
import fetchCommentsForAllIssues from './jira/index.js';
import get_summary from './openai/index.js';


async function main() {
    const commentsData = await fetchCommentsForAllIssues();
    var updates = Object.values(commentsData);
    var query_str = `---------------\n`;
    query_str += updates.map(function(item) { return `Jira ID: ${item.issueKey}, Title: ${item.title}, Status: ${item.status} Comment: ${item.comments ? item.comments[item.comments.length -1] : ""}`; }).join("\n");
    query_str += `---------------\n`;
    const ai_summary = await get_summary(query_str);
    console.log(ai_summary)
    console.log(query_str)
}

main();
