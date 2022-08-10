const form = document.querySelector("form");
const body= document.querySelector("body");


const availableCommands = ["help","clear","projects","github","linkedin","introduction","experience","skills"]

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const inputCommand=document.querySelector("input");
  const messageDiv = document.createElement("div");
  messageDiv.setAttribute("id","error-m")

  if(inputCommand.value==="clear"){
    const items=document.querySelectorAll("#error-m");
    items.forEach((item=>{
      body.removeChild(item)
    }))
  }

  if(inputCommand.value==="help"){
    messageDiv.innerHTML=`<div>
    <b style='color:coral;'>Commands available</b>
    <p>help - for help</p>
    <p>clear - to clear the terminal</p>
    <p>skills - to see the list of mine skills</p>  
    </div>`
    body.appendChild(messageDiv)
    body.appendChild(form)
  }

  if(inputCommand.value==="skills"){
    messageDiv.innerHTML=`<div>
    <b style='color:coral;'>I know these things</b>
    <p>React.js</p>
    <p>Next.js</p>
    <p>HTML,CSS,JS</p>  
    <p>Vue.js</p> 
    <p>Node.js</p>   
    </div>`
    body.appendChild(messageDiv)
    body.appendChild(form)
  }

  if(!availableCommands.includes(inputCommand.value.toLowerCase())){  
    messageDiv.innerHTML='<p>Command not available. Enter "help" for list of available commands.</p>'
    body.appendChild(messageDiv)
    body.appendChild(form)
  }
})