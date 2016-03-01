var JiraClient = require('jira-connector');
require('dashing-js');

var host = 'jira.myteam.ru';
var protocol = 'http';
var username = 'admin';
var password = 'thepassword';


var jira = new JiraClient( {
    host: host,
	protocol: protocol,
	basic_auth: {
        username: username,
        password: password
    }
});

var jql = 'project in (BACK, FRONT) AND issuetype = Ошибка ORDER BY priority DESC';
var blockersCount;
var issuesArray;

var issues = [];

setInterval(function() {
  
  jira.search.search({
	jql: jql
	}, function(error, search) {
		
		issuesArray = search.issues;
		blockersCount = search.total;
		
		for (i = 0; i < blockersCount; i++) {
			console.log(issuesArray[i].key);
			var issue = {
					id: issuesArray[i].key,
					issueUrl: protocol+"://"+"/browse/"+issuesArray[i].key,
					title: issuesArray[i].fields.summary,
					assigneeName: issuesArray[i].fields.assignee.name,
					assigneeAvatarUrl: issuesArray[i].fields.assignee.avatarUrls["24x24"]
				};
			issues.push(issue);	
		}		
		
	});  

  
  send_event('jira-list-issues-jql', { header: 'Блокеры', issue_type: "", issues: issues});
  send_event('blockers', {value: blockersCount});
  issues = [];
  
}, 2 * 60000);
