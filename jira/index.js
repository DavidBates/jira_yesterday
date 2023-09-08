
const JIRA_API_ENDPOINT = `${process.env.JIRA_DOMAIN}/rest/api/2`;
const AUTH_HEADER = "Basic " + btoa(`${process.env.JIRA_EMAIL}:${process.env.JIRA_TOKEN}`);
async function fetchIssues() {
    const jql = encodeURIComponent(`${process.env.JIRA_PROJECT} and assignee=currentUser() and updated>=-24h`);
    const response = await fetch(`${JIRA_API_ENDPOINT}/search?jql=${jql}&fields=key`, {
        method: 'GET',
        headers: {
            'Authorization': AUTH_HEADER,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data.issues;
}

async function fetchIssueDetails(issueKey) {
    const response = await fetch(`${JIRA_API_ENDPOINT}/issue/${issueKey}`, {
        method: 'GET',
        headers: {
            'Authorization': AUTH_HEADER,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return {issueKey: issueKey, title: data.fields.summary, status: data.fields.status.name};
}

async function fetchCommentsForIssue(issueKey) {
    const response = await fetch(`${JIRA_API_ENDPOINT}/issue/${issueKey}/comment`, {
        method: 'GET',
        headers: {
            'Authorization': AUTH_HEADER,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data.comments;
}

async function fetchCommentsForAllIssues() {
    const issues = await fetchIssues();
    const commentsData = {};

    for (const issue of issues) {
        const details = await fetchIssueDetails(issue.key);
        const comments = await fetchCommentsForIssue(issue.key);
       
        const filtered_comments = Array.from(new Set(comments.filter(comment => {
            return comment.author.emailAddress === process.env.JIRA_EMAIL && Date.parse(comment.updated) >= Date.now() - 86400000;
        })));
        
        commentsData[issue.key] = {issueKey: issue.key, comments: filtered_comments.map(comment => comment.body), title: details.title, status: details.status};
    }

    return commentsData;
}

export default fetchCommentsForAllIssues;
