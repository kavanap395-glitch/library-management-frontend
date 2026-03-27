const API = "https://library-management-backend-88w2.onrender.com";

// Load books
async function displayBooks() {
    let res = await fetch(API + "/api/books");
    let books = await res.json();

    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach(book => {
        list.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <button onclick="deleteBook('${book._id}')">Delete</button>
            </td>
        </tr>`;
    });
}

// Add book
async function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;

    if (!title || !author || !category) {
        alert("Fill all fields");
        return;
    }

    await fetch(API + "/api/books", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, author, category })
    });

    displayBooks();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
}

async function deleteBook(id) {
    await fetch(API + "/api/books/" + id, {
        method: "DELETE"
    });
    displayBooks();
}

document.addEventListener("DOMContentLoaded", displayBooks);