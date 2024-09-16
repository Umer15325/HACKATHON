const contactButton = document.getElementById("cont") as HTMLButtonElement;
const contactSection = document.getElementById("contact") as HTMLElement;


function contFunction() {
    const x = document.getElementById("contact");
    if (contactSection.style.display === "none") {
      contactSection.style.display = "block";
    } else {
      contactSection.style.display = "none";
    }
  }


const eduButton = document.getElementById("edu") as HTMLButtonElement;
const eduSection = document.getElementById("education") as HTMLElement;

  function eduFunc() {
    const x = document.getElementById("education");
    if (eduSection.style.display === "none") {
        eduSection.style.display = "block";
    } else {
        eduSection.style.display = "none";
    }
  }


const skillButton = document.getElementById("skill") as HTMLButtonElement;
const skillSection = document.getElementById("skills") as HTMLElement;

  function skillFunc() {
    const x = document.getElementById("skills");
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
    } else {
        skillSection.style.display = "none";
    }
  }


const expButton = document.getElementById("work") as HTMLButtonElement;
const expSection = document.getElementById("experience") as HTMLElement;

  function expFunc() {
    const x = document.getElementById("experience");
    if (expSection.style.display === "none") {
        expSection.style.display = "block";
    } else {
        expSection.style.display = "none";
    }
  }