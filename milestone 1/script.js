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
