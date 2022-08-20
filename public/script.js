const form = document.querySelector("form");
const body = document.querySelector("body");
const commandInput = document.getElementById("command-input");
const helpSection = document.getElementById("help-section");

//data
const RESPONSES = {
  help: "<div><b style='color:coral;'>Commands available</b><p>help - for help</p><p>clear - to clear the terminal</p><p>skills - to see the list of my skills</p><p>linkedin - my linkedin profile</p><p>github - my github profile</p><p>projects - my personal projects</p><p>introduction - my brief introduction</p><p>-----</p></div>",
  skills:
    "<div><b style='color:coral;'>I know these things</b><p>React.js</p><p>Next.js</p><p>HTML,CSS,JS</p>  <p>Vue.js</p> <p>Node.js</p>   <p>Jenkins, Heroku, Netlify, Firebase</p> <p>Postgres, MongoDB</p>   <p style='color:coral;'>Most importantly i have a passion to learn more and improve myself !</p><p>-----</p></div>",
  github:
    "<div><b style='color:coral;'>Here is my github profile</b><br/><a href='https://github.com/therealrinku/' target='_blank'>github.com/therealrinku</a><p>-----</p></div>",
  linkedin:
    "<div><b style='color:coral;'>Here is my linkedin profile</b><br/><a href='https://www.linkedin.com/in/rinkunited/' target='_blank'>linkedin.com/in/rinkunited</a><p>-----</p></div>",
  projects:
    "<div><b style='color:coral;'>Here are some of my personal projects</b><br/><a href='https://uns0cial.web.app/' target=_blank'>Uns0cial(social media app)</a><br/><a href='https://taskyoxx.web.app/' target='_blank'>Taskyoxx(todo app)</a><p>-----</p></div>",
  introduction:
    "<div><b style='color:coral;'>Here is my brief introduction</b><br/><p>My name is Rinku Chaudhari and I am from Nepal. <br/>I have 3+ years of experience working on both frontend and backend technologies.  <br/>I have mostly worked on React.js but I have a knowledge of wide variety of programming languages from backend to frontend.</p><p>-----</p></div>",
  invalidCommand: "<p>Command not available. Enter 'help' for the list of available commands.</p>",
  ls: "<p>No any files or folders exists in this directory. Type 'help' for the list of available commands.</p><p>-----</p>",
};

const COMMANDS_LIST = {
  help: "help",
  skills: "skills",
  github: "github",
  linkedin: "linkedin",
  introduction: "introduction",
  ls: "ls",
  projects: "projects",
};

//utils
function WhatToAppend(commandName) {
  switch (commandName) {
    case COMMANDS_LIST.help:
      return RESPONSES.help;

    case COMMANDS_LIST.github:
      return RESPONSES.github;

    case COMMANDS_LIST.linkedin:
      return RESPONSES.linkedin;

    case COMMANDS_LIST.ls:
      return RESPONSES.ls;

    case COMMANDS_LIST.projects:
      return RESPONSES.projects;

    case COMMANDS_LIST.skills:
      return RESPONSES.skills;

    case COMMANDS_LIST.introduction:
      return RESPONSES.introduction;

    default:
      return RESPONSES.invalidCommand;
  }
}

//never lose focus on command input
commandInput.addEventListener("focusout", function () {
  commandInput.focus();
});

//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputField = document.querySelector("input");
  const messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "error-m");
  messageDiv.style.marginBottom = "15px";
  helpSection.innerHTML = "";

  if (inputField.value === "clear") {
    const items = document.querySelectorAll("#error-m");
    items.forEach((item) => {
      body.removeChild(item);
    });
    return (commandInput.value = "");
  }

  const appendHTML = WhatToAppend(inputField.value.toLowerCase());
  messageDiv.innerHTML = appendHTML;
  body.appendChild(messageDiv);

  body.appendChild(form);
  commandInput.focus();
  commandInput.value = "";
});
