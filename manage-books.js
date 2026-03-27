// Load books
async function displayBooks() {
    let res = await fetch("/api/books");
    let books = await res.json();

    let list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach((book) => {
        list.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>
                <button class="delete-btn" onclick="deleteBook('${book._id}')">
                    Delete
                </button>
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

    await fetch("/api/books", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, author, category })
    });

    displayBooks();

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
}

// Delete book
async function deleteBook(id) {
    await fetch(`/api/books/${id}`, {
        method: "DELETE"
    });

    displayBooks();
}

// Load on start
document.addEventListener("DOMContentLoaded", displayBooks);