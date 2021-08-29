let skillBar = document.getElementsByClassName("skill-bar");
let desc = document.getElementsByClassName("desc");
let skillsRight = document.getElementsByClassName("skills-right")[0];

for (let i = 0; i < skillBar.length; i++) {
  skillBar[i].addEventListener("click", function () {
    skillsRight.getElementsByClassName("active")[0].classList.remove("active");
    desc[i].classList.add("active");
  });
}

// skillBar.addEventListener("click", function () {
//   //document.getElementsByClassName("html-desc")[0].style.display = "initial";
//   document.getElementsByClassName(
//     "skill-container"
//   )[0].childNodes[5].style.display = "initial";
// });
