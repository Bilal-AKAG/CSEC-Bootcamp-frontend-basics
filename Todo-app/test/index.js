const ul = document.querySelector(".options");
const del=document.querySelectorAll("button");


del.forEach(button=>{
  button.addEventListener("click",()=>{
    console.log(button.parentElement);
    
    button.parentElement.remove();
  })
})


