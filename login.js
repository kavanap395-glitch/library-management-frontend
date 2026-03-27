document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Demo credentials
    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "Admin-dashboard.html";
    } else {
        alert("Invalid Username or Password");
    }
});