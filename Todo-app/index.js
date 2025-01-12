const customSelect = document.querySelector(".custom-select");
const selectButton = document.querySelector(".select-button");
const Span=document.querySelector(".btn-s");
const ul = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const image_arrow=document.querySelector(".img-arrow");
const plus_btn=document.querySelector(".plus-btn");
const popel=document.querySelector(".pop-element");


const toggle = ["images/arrowdown.svg","images/arrowup.svg"];
let length =toggle.length;
let pointer=1

selectButton.addEventListener("click", () => {
  ul.classList.toggle("open");
  if(pointer>length-1||pointer<0){
    pointer=0;
  }
  image_arrow.src = toggle[pointer];
  pointer += 1;
  console.log(pointer);
  
   
});


options.forEach((option) => {
  option.addEventListener("click", (event) => {
    Span.textContent = event.target.textContent;
    ul.classList.remove("open");
    image_arrow.src = "images/arrowdown.svg";
    pointer-=1
  });
});

document.addEventListener("click", (event) => {
  if (!customSelect.contains(event.target)) {
    ul.classList.remove("open");

  }
});

// darkmode feature
let darkmode=localStorage.getItem("darkmode");
const theme_switch=document.querySelector('.theme');

const enableDarkmode=() => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode","active");
   
};
const disableDarkmode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode",null);
};
if(darkmode==="active") enableDarkmode();

theme_switch.addEventListener("click",(e)=>{
  darkmode=localStorage.getItem("darkmode");
  darkmode!=="active"?enableDarkmode():disableDarkmode();

});










plus_btn.addEventListener("click",(event)=> {
  popel.classList.add("flex")
  popel.innerHTML = `
        <div class="contents">
            <h1>New Notes</h1>
            <input class="input" type="text">
            <div class="btns">
              <button>Cancel</button>
              <button>Apply</button>
            </div>
          </div>
  `;

     

})
