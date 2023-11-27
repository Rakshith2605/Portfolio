document.querySelectorAll(".profile-pic").forEach((pic) => {
    pic.addEventListener("click", function () {
      const imgSrc = this.getAttribute("src");
      document.querySelector(".popup-image").setAttribute("src", imgSrc);
      document.querySelector(".popup").style.display = "block";
    });
  });
  
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });
  
  function redirectToLinkedIn() {
    window.open("https://www.linkedin.com/in/rakshithd26", "_blank");
  }
  
  function openEmail() {
    window.open("mailto:rakshith.d26@outlook.com", "_blank");
  }



// aboutTextBox.type = 'p';
// aboutTextBox. = 'Hi! I am Rakshith';
// aboutTextBox.style.display = 'none'; // Initially hide the textbox

let isTextBoxDisplayed = false;

document.body.appendChild(aboutTextBox);

const aboutTextBoxContainer = document.querySelector('.about-textbox-container');

aboutButton.addEventListener('click', () => {
  if (aboutTextBoxContainer.style.display === 'none') {
    aboutTextBoxContainer.style.display = 'block';
  } else {
    aboutTextBoxContainer.style.display = 'none';
  }
});

function appendptag (){
// const aboutButton = document.getElementById('testid');
// console.log(aboutButton)
// const createpTag = document.createElement('p');
// createpTag.innerHTML = "Hi! I am Rakshith";
// createpTag.setAttribute("id","about-text");
// aboutButton.appendChild(createpTag);

    const testval = document.getElementById('text-holder');
    testval.style.display = "block";
}

body.addEventListener("click", () =>{
    const aboutptag = document.getElementById("text-holder");
        aboutptag.display = "none";
})