let issuedBooks = [];

// Issue Book
function issueBook() {
    let book = document.getElementById("bookName").value;
    let user = document.getElementById("userName").value;
    let issueDate = document.getElementById("issueDate").value;
    let dueDate = document.getElementById("dueDate").value;

    if (book === "" || user === "" || issueDate === "" || dueDate === "") {
        alert("Please fill all fields");
        return;
    }

    let record = {
        book: book,
        user: user,
        issueDate: issueDate,
        dueDate: dueDate
    };

    issuedBooks.push(record);

    displayIssuedBooks();

    // Clear inputs
    document.getElementById("bookName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("issueDate").value = "";
    document.getElementById("dueDate").value = "";
}

// Display Issued Books
function displayIssuedBooks() {
    let list = document.getElementById("issueList");
    list.innerHTML = "";

    issuedBooks.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.book}</td>
                <td>${item.user}</td>
                <td>${item.issueDate}</td>
                <td>${item.dueDate}</td>
                <td>
                    <button class="delete-btn" onclick="deleteIssue(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
        list.innerHTML += row;
    });
}

// Delete Record
function deleteIssue(index) {
    issuedBooks.splice(index, 1);
    displayIssuedBooks();
}