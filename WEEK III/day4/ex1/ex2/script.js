const from = document.querySelector("form")
// console.log(from)

const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
// console.log(firstNameInput, lastNameInput)


const firstnamebyname = document.getElementsByName("fname")[0];
const lastNamebyname = document.getElementsByName("lname")[0];
// console.log(firstnamebyname, lastNamebyname)


from.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    console.log(firstName)
    const lastName = lastNameInput.value.trim()
    console.log(lastName)
    if (firstName === "" || lastName === "") {
        alert("Please fill in all the fields! ")

    }
    else {
        const ul = document.querySelector(".usersAnswer");
        const firstNameLi = document.createElement("li");
        const lastNameLi = document.createElement("li");

        firstNameLi.textContent = firstName;
        lastNameLi.textContent = lastName;

        ul.appendChild(firstNameLi);
        ul.appendChild(lastNameLi);
    }

});
