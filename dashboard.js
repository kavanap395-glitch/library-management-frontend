// Show section message (demo)
function showMessage(section) {
    alert(section + " section clicked!");
}

// Logout Function
function logout() {
    alert("Logged out successfully!");
    window.location.href = "index.html"; // your login page
}

// Dynamic values (optional)
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("books").innerText = 120;
    document.getElementById("issued").innerText = 45;
    document.getElementById("users").innerText = 60;
});