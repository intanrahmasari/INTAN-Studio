// ====================================
// AUTH SYSTEM
// ====================================

const userData = localStorage.getItem("currentUser");

const accountLink = document.getElementById("accountLink");
const accountText = document.getElementById("accountText");

if (accountLink && accountText) {

    if (userData) {

        const currentUser = JSON.parse(userData);

        accountText.textContent = currentUser.fullname.split(" ")[0];

        accountLink.href = "customer.html";

    } else {

        accountText.textContent = "Login";

        accountLink.href = "login.html";

    }

}