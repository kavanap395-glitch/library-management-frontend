const API = "https://library-management-backend-88w2.onrender.com";

// Load issued books
async function displayIssuedBooks() {
    let res = await fetch(API + "/api/issue");
    let data = await res.json();

    let list = document.getElementById("issueList");
    list.innerHTML = "";

    data.forEach(item => {
        list.innerHTML += `
        <tr>
            <td>${item.book}</td>
            <td>${item.user}</td>
            <td>${item.issueDate}</td>
            <td>${item.dueDate}</td>
            <td>-</td>
        </tr>`;
    });
}

// Issue book
async function issueBook() {
    let book = document.getElementById("bookName").value;
    let user = document.getElementById("userName").value;
    let issueDate = document.getElementById("issueDate").value;
    let dueDate = document.getElementById("dueDate").value;

    if (!book || !user || !issueDate || !dueDate) {
        alert("Fill all fields");
        return;
    }

    await fetch(API + "/api/issue", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ book, user, issueDate, dueDate })
    });

    displayIssuedBooks();

    document.getElementById("bookName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("issueDate").value = "";
    document.getElementById("dueDate").value = "";
}

document.addEventListener("DOMContentLoaded", displayIssuedBooks);