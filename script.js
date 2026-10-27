
const form = document.getElementById("member-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const membershipInput = document.getElementById("membership");
const aboutInput = document.getElementById("about");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const membershipError = document.getElementById("membership-error");
const aboutError = document.getElementById("about-error");

const successMessage = document.getElementById("success-message");
const memberList = document.getElementById("member-list");
const memberCounter = document.getElementById("member-counter");
const darkModeButton = document.getElementById("dark-mode-button");

console.log(form);
console.log(nameInput);
console.log(emailInput);
console.log(membershipInput);
console.log(aboutInput);
console.log(nameError);
console.log(emailError);
console.log(membershipError);
console.log(aboutError);
console.log(successMessage);
console.log(memberList);
console.log(memberCounter);
console.log(darkModeButton);


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    membershipError.textContent = "";
    aboutError.textContent = "";
    successMessage.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    if (membershipInput.value === "") {
        membershipError.textContent = "Select a membership type";
        valid = false;
    }

    if (aboutInput.value.trim() === "") {
        aboutError.textContent = "About field is required";
        valid = false;
    }

    if (!valid) {
        return;
    }

    const memberItem = document.createElement("li");

    const memberInfo = document.createElement("span");

    memberInfo.textContent =
        nameInput.value +
        " - " +
        emailInput.value +
        " - " +
        membershipInput.value;

    const removeButton = document.createElement("button");

    removeButton.type = "button";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        memberItem.remove();
        memberCounter.textContent = memberList.children.length;
    });

    memberItem.appendChild(memberInfo);
    memberItem.appendChild(removeButton);

    memberList.appendChild(memberItem);

    memberCounter.textContent = memberList.children.length;

    successMessage.textContent = "Member registered successfully.";

    form.reset();
});


nameInput.addEventListener("input", function () {
    nameError.textContent = "";
});

emailInput.addEventListener("input", function () {
    emailError.textContent = "";
});

membershipInput.addEventListener("change", function () {
    membershipError.textContent = "";
});

aboutInput.addEventListener("input", function () {
    aboutError.textContent = "";
});


darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "Light Mode";
    } else {
        darkModeButton.textContent = "Dark Mode";
    }
});

