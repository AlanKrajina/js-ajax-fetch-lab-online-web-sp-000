const baseURL = 'https://api.github.com';
const user = 'alankrajina';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "ed047aff5b09f484bdad2d35b287d35b1085158b";
}



function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  const url = `${baseURL}/repos/${repo}/forks`

  fetch(url,{
    headers: {
    Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

function showResults(json) {
    $("#results").append(`<a href=${json.html_url}>${json.html_url}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
