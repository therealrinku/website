const form = document.querySelector("form");
const appBody = document.querySelector(".app-body");
const app = document.querySelector(".app");
const commandInput = document.getElementById("command-input");
const helpSection = document.getElementById("help-section");
const topElem = document.getElementById("app-top");

//data
const RESPONSES = {
  help: "<div><b style='color:coral;'>Available commands</b><p>help - for help</p><p>clear - to clear the terminal</p><p>skills - to see the list of my skills</p><p>linkedin - my linkedin profile</p><p>github - my github profile</p><p>projects - my personal projects</p><p>intro - my brief introduction</p><p>-----</p></div>",
  skills:
    "<div><b style='color:coral;'>I have experience in following programming languages</b><p>HTML,CSS,JS</p><p>React.js</p><p>Next.js</p>  <p>Vue.js</p> <p>Node.js</p>  <p>Postgres, MongoDB</p> <p>Python and Django</p> <p>React Native</p>   <p style='color:coral;'>Most importantly I am super passionate about learning new tools and technologies.</p><p>-----</p></div>",
  github:
    "<div><b style='color:coral;'>Here is my github profile</b><br/><a href='https://github.com/therealrinku/' target='_blank'>github.com/therealrinku</a><p>-----</p></div>",
  linkedin:
    "<div><b style='color:coral;'>Here is my linkedin profile</b><br/><a href='https://www.linkedin.com/in/rinkunited/' target='_blank'>linkedin.com/in/rinkunited</a><p>-----</p></div>",
  projects:
    "<div><b style='color:coral;'>Here are some of my personal projects</b><br/><a href='https://robosocial.web.app/' target=_blank'>Robosocial(social media app)</a><br/><a href='https://taskyoxx.web.app/' target='_blank'>Taskyoxx(todo app)</a> <br/><a href='https://roboshare.vercel.app/' target='_blank'>Roboshare (file sharing app)</a> <p>-----</p></div>",
  introduction:
    "<div><b style='color:coral;'>Here is my brief introduction</b><br/><p>I'm Rinku Chaudhari from Nepal. <br/>I have 3+ years of experience working on both frontend and backend technologies.  <br/>I have mostly worked on React.js but I have a knowledge of wide variety of programming languages from backend to frontend. enter 'skills' for more info</p><p>-----</p></div>",
  invalidCommand: "<p>Invalid command. Enter 'help' for the list of available commands.</p>",
};

const COMMANDS_LIST = {
  help: "help",
  skills: "skills",
  github: "github",
  linkedin: "linkedin",
  intro: "intro",
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

    case COMMANDS_LIST.projects:
      return RESPONSES.projects;

    case COMMANDS_LIST.skills:
      return RESPONSES.skills;

    case COMMANDS_LIST.intro:
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
  if (!inputField.value.trim()) return;

  const messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "error-m");
  messageDiv.style.marginBottom = "15px";
  messageDiv.style.padding = "0 10px";
  helpSection.innerHTML = "";

  if (inputField.value === "clear") {
    const items = document.querySelectorAll("#error-m");
    items.forEach((item) => {
      appBody.removeChild(item);
    });
    return (commandInput.value = "");
  }

  const appendHTML = WhatToAppend(inputField.value.toLowerCase());
  messageDiv.innerHTML = appendHTML;
  appBody.appendChild(messageDiv);

  appBody.appendChild(form);
  commandInput.focus();
  commandInput.value = "";

  //scroll to the bottom
  appBody.scrollTop = appBody.scrollHeight;
});

// -- > dragging magic <---
let isDragging = false;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

topElem.addEventListener("mousedown", (e) => {
  isDragging = true;
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
});

topElem.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    e.preventDefault();
    const currentX = e.clientX - initialX;
    const currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    app.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
});
