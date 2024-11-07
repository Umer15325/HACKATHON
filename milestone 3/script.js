function updateResume(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    event.preventDefault(); // Prevent form submission
    // Get form values
    var name = ((_a = document.getElementById("formName")) === null || _a === void 0 ? void 0 : _a.value) || "Muhammad Umer";
    var profession = ((_b = document.getElementById("formProfession")) === null || _b === void 0 ? void 0 : _b.value) || "Web Developer";
    var city = ((_c = document.getElementById("formCity")) === null || _c === void 0 ? void 0 : _c.value) || "Karachi";
    var phone = ((_d = document.getElementById("formPhone")) === null || _d === void 0 ? void 0 : _d.value) || "0315-2032020";
    var email = ((_e = document.getElementById("formEmail")) === null || _e === void 0 ? void 0 : _e.value) || "umer15325@gmail.com";
    var education = ((_f = document.getElementById("formEducation")) === null || _f === void 0 ? void 0 : _f.value.split(",")) || [];
    var skills = ((_g = document.getElementById("formSkills")) === null || _g === void 0 ? void 0 : _g.value.split(",")) || [];
    var experience = ((_h = document.getElementById("formExperience")) === null || _h === void 0 ? void 0 : _h.value.split(",")) || [];
    // Update resume fields
    var nameField = document.getElementById("name");
    if (nameField)
        nameField.innerText = name;
    var professionField = document.getElementById("userProfession");
    if (professionField)
        professionField.innerText = profession;
    var cityField = document.getElementById("userCity");
    if (cityField)
        cityField.innerText = city;
    var phoneField = document.getElementById("userPhone");
    if (phoneField)
        phoneField.innerText = phone;
    var emailField = document.getElementById("userEmail");
    if (emailField) {
        emailField.innerText = email;
        emailField.href = "mailto:".concat(email);
    }
    // Update education
    var educationList = document.getElementById("educationList");
    if (educationList) {
        educationList.innerHTML = "";
        education.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = item.trim();
            educationList.appendChild(li);
        });
    }
    // Update skills
    var skillsList = document.getElementById("skillsList");
    if (skillsList) {
        skillsList.innerHTML = "";
        skills.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });
    }
    // Update experience
    var experienceList = document.getElementById("experienceList");
    if (experienceList) {
        experienceList.innerHTML = "";
        experience.forEach(function (exp) {
            var li = document.createElement("li");
            li.textContent = exp.trim();
            experienceList.appendChild(li);
        });
        // const experienceItem = document.createElement("li");
        // experienceItem.textContent = experience;
        // experienceList.appendChild(experienceItem);
    }
}
function previewProfilePic(event) {
    var _a;
    var input = event.target;
    var profilePic = document.getElementById("profilePicture");
    var file = (_a = input === null || input === void 0 ? void 0 : input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file && profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && profilePic) {
                profilePic.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}
// toogle buttons
var contactButton = document.getElementById("cont");
var contactSection = document.getElementById("contact");
function contFunction() {
    var x = document.getElementById("contact");
    if (contactSection.style.display === "none") {
        contactSection.style.display = "block";
    }
    else {
        contactSection.style.display = "none";
    }
}
var eduButton = document.getElementById("edu");
var eduSection = document.getElementById("education");
function eduFunc() {
    var x = document.getElementById("education");
    if (eduSection.style.display === "none") {
        eduSection.style.display = "block";
    }
    else {
        eduSection.style.display = "none";
    }
}
var skillButton = document.getElementById("skill");
var skillSection = document.getElementById("skills");
function skillFunc() {
    var x = document.getElementById("skills");
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
    }
    else {
        skillSection.style.display = "none";
    }
}
var expButton = document.getElementById("work");
var expSection = document.getElementById("experience");
function expFunc() {
    var x = document.getElementById("experience");
    if (expSection.style.display === "none") {
        expSection.style.display = "block";
    }
    else {
        expSection.style.display = "none";
    }
}
