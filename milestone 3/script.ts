function updateResume(event: Event): void {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = (document.getElementById("formName") as HTMLInputElement)?.value || "Muhammad Umer";
  const profession = (document.getElementById("formProfession") as HTMLInputElement)?.value || "Web Developer";
  const city = (document.getElementById("formCity") as HTMLInputElement)?.value || "Karachi";
  const phone = (document.getElementById("formPhone") as HTMLInputElement)?.value || "0315-2032020";
  const email = (document.getElementById("formEmail") as HTMLInputElement)?.value || "umer15325@gmail.com";
  const education = (document.getElementById("formEducation") as HTMLInputElement)?.value.split(",") || [];
  const skills = (document.getElementById("formSkills") as HTMLInputElement)?.value.split(",") || [];
  const experience = (document.getElementById("formExperience") as HTMLInputElement)?.value.split(",") || [];

  // Update resume fields
  const nameField = document.getElementById("name");
  if (nameField) nameField.innerText = name;

  const professionField = document.getElementById("userProfession");
  if (professionField) professionField.innerText = profession;

  const cityField = document.getElementById("userCity");
  if (cityField) cityField.innerText = city;

  const phoneField = document.getElementById("userPhone");
  if (phoneField) phoneField.innerText = phone;

  const emailField = document.getElementById("userEmail") as HTMLAnchorElement;
  if (emailField) {
      emailField.innerText = email;
      emailField.href = `mailto:${email}`;
  }

  // Update education
  const educationList = document.getElementById("educationList");
  if (educationList) {
      educationList.innerHTML = "";
      education.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.trim();
          educationList.appendChild(li);
      });
  }

  // Update skills
  const skillsList = document.getElementById("skillsList");
  if (skillsList) {
      skillsList.innerHTML = "";
      skills.forEach(skill => {
          const li = document.createElement("li");
          li.textContent = skill.trim();
          skillsList.appendChild(li);
      });
  }

  // Update experience
  const experienceList = document.getElementById("experienceList");
  if (experienceList) {
      experienceList.innerHTML = "";

      experience.forEach(exp => {
        const li = document.createElement("li");
        li.textContent = exp.trim();
        experienceList.appendChild(li);
    });
      // const experienceItem = document.createElement("li");
      // experienceItem.textContent = experience;
      // experienceList.appendChild(experienceItem);
  }
}

function previewProfilePic(event: Event): void {
  const input = event.target as HTMLInputElement;
  const profilePic = document.getElementById("profilePicture") as HTMLImageElement;
  const file = input?.files?.[0];

  if (file && profilePic) {
      const reader = new FileReader();
      reader.onload = function(e) {
          if (e.target && profilePic) {
              profilePic.src = e.target.result as string;
          }
      };
      reader.readAsDataURL(file);
  }
}




// toogle buttons
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