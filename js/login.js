// ===============================
// LOGIN SYSTEM
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // ===============================
        // ADMIN LOGIN
        // ===============================

        if (
            email === "admin@intanstudio.com" &&
            password === "admin123"
        ) {

            localStorage.setItem("userRole", "admin");
            localStorage.setItem("currentUser", "Admin");

            window.location.href = "admin.html";

            return;

        }

        // ===============================
        // CUSTOMER LOGIN
        // ===============================

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(function (item) {

            return (
                item.email === email &&
                item.password === password
            );

        });

        if (user) {

            localStorage.setItem("userRole", "customer");

            localStorage.setItem("currentUser", JSON.stringify(user));

            window.location.href = "customer.html";

            return;

        }

        // ===============================
        // LOGIN FAILED
        // ===============================

        alert("Email or password is incorrect!");

    });

}