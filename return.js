const API = "https://library-management-backend-88w2.onrender.com";

// Load returned books
async function displayReturnedBooks() {
    let res = await fetch(API + "/api/return");
    let data = await res.json();

    let list = document.getElementById("returnList");
    list.innerHTML = "";

    data.forEach(item => {
        list.innerHTML += `
        <tr>
            <td>${item.book}</td>
            <td>${item.user}</td>
            <td>${item.dueDate}</td>
            <td>${item.returnDate}</td>
            <td>₹${item.fine}</td>
            <td>-</td>
        </tr>`;
    });
}

// Return book
async function returnBook() {
    let book = document.getElementById("bookName").value;
    let user = document.getElementById("userName").value;
    let returnDate = document.getElementById("returnDate").value;
    let dueDate = document.getElementById("dueDate").value;

    if (!book || !user || !returnDate || !dueDate) {
        alert("Fill all fields");
        return;
    }

    let res = await fetch(API + "/api/return", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ book, user, returnDate, dueDate })
    });

    let data = await res.json();
    alert("Fine: ₹" + data.fine);

    displayReturnedBooks();
}

document.addEventListener("DOMContentLoaded", displayReturnedBooks);