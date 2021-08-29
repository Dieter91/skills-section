let skillBar = document.getElementsByClassName("skill-bar");
let desc = document.getElementsByClassName("desc");
let skillsRight = document.getElementsByClassName("skills-right")[0];
let skillTitle = document.getElementsByClassName("skill-title");

for (let i = 0; i < skillBar.length; i++) {
  skillBar[i].addEventListener("click", function () {
    skillsRight.getElementsByClassName("active")[0].classList.remove("active");
    desc[i].classList.add("active");
  });

  skillTitle[i].addEventListener("click", function () {
    skillsRight.getElementsByClassName("active")[0].classList.remove("active");
    desc[i].classList.add("active");
  });
}
