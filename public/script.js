const form = document.querySelector("form");
const body = document.querySelector("body");
const commandInput = document.getElementById("command-input");
const helpSection = document.getElementById("help-section");
//never lose focus on command input
commandInput.addEventListener("focusout", function () {
  _this = this;
  setTimeout(function () {
    _this.focus();
  }, 0);
});

const availableCommands = ["help", "clear", "projects", "github", "linkedin", "introduction", "experience", "skills"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputCommand = document.querySelector("input");
  const messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "error-m");
  helpSection.innerHTML = "";

  if (inputCommand.value === "clear") {
    const items = document.querySelectorAll("#error-m");
    items.forEach((item) => {
      body.removeChild(item);
    });
  }

  if (inputCommand.value === "help") {
    messageDiv.innerHTML = `<div>
    <b style='color:coral;'>Commands available</b>
    <p>help - for help</p>
    <p>clear - to clear the terminal</p>
    <p>skills - to see the list of my skills</p> 
    <p>linkedin - my linkedin profile</p>  
    <p>github - my github profile</p> 
    <p>projects - my personal projects</p> 
    <p>introduction - my brief introduction</p>
    </div>`;
    body.appendChild(messageDiv);
  }

  if (inputCommand.value === "skills") {
    messageDiv.innerHTML = `<div>
    <b style='color:coral;'>I know these things</b>
    <p>React.js</p>
    <p>Next.js</p>
    <p>HTML,CSS,JS</p>  
    <p>Vue.js</p> 
    <p>Node.js</p>   
    <p>Jenkins, Heroku, Netlify, Firebase</p> 
    <p>Postgres, MongoDB</p>   
    <p style='color:coral;'>Most importantly i have a passion to learn more and improve myself !</p>
    </div>`;
    body.appendChild(messageDiv);
  }

  if (inputCommand.value === "linkedin") {
    messageDiv.innerHTML = `<div>
    <b style='color:coral;'>Here is my linkedin profile</b>
    <a href="https://www.linkedin.com/in/rinkunited/" target="_blank">Click here</a>
    </div>`;
    body.appendChild(messageDiv);
  }

  if (inputCommand.value === "github") {
    messageDiv.innerHTML = `<div>
    <b style='color:coral;'>Here is my github profile</b>
    <a href="https://github.com/therealrinku/" target="_blank">Click here</a>
    </div>`;
    body.appendChild(messageDiv);
  }

  if (inputCommand.value === "projects") {
    messageDiv.innerHTML = `<div>
    <b style='color:coral;'>Here are some of my personal projects</b>
    <a href="https://uns0cial.web.app/" target="_blank">Uns0cial(social media app)</a>
    <a href="https://taskyoxx.web.app/" target="_blank">Taskyoxx(todo app)</a>
    </div>`;
    body.appendChild(messageDiv);
  }

  if (inputCommand.value === "introduction") {
    messageDiv.innerHTML = `<div>
    <b style='color:aqua;'>My name is Rinku Chaudhari and I am from Nepal. 
    I have 3+ years of experience working on both frontend and backend technologies. 
    I have mostly worked on React.js but I have a knowledge of wide variety of programming languages from backend to frontend.</b>
    </div>`;
    body.appendChild(messageDiv);
  }

  if (!availableCommands.includes(inputCommand.value.toLowerCase())) {
    messageDiv.innerHTML = '<p>Command not available. Enter "help" for the list of available commands.</p>';
    body.appendChild(messageDiv);
  }

  body.appendChild(form);
  commandInput.focus();
  commandInput.value = "";
});
