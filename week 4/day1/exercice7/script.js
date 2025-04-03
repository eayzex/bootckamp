(function (userName, profilePic) {
    const userContainer = document.getElementById("user-container");

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-info");

    const img = document.createElement("img");
    img.src = profilePic;
    img.alt = "User Profile";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `Welcome, ${userName}!`;

    userDiv.appendChild(img);
    userDiv.appendChild(nameSpan);
    userContainer.appendChild(userDiv);

})("John Doe", "https://i.pravatar.cc/40"); // يمكنك تغيير الصورة إلى رابط آخر
