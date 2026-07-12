// ===============================
// REGISTER SYSTEM
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validasi password
        if (password !== confirmPassword) {

            alert("Password and Confirm Password do not match!");

            return;

        }

        // Ambil semua user yang sudah terdaftar
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Cek email sudah dipakai atau belum
        const emailExists = users.find(user => user.email === email);

        if (emailExists) {

            alert("Email is already registered!");

            return;

        }

        // Simpan user baru
        const newUser = {

            fullname,
            email,
            password

        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! Please login.");

        window.location.href = "login.html";

    });

}