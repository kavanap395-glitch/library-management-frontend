let returnedBooks = [];

// Return Book
function returnBook() {
    let book = document.getElementById("bookName").value;
    let user = document.getElementById("userName").value;
    let returnDate = document.getElementById("returnDate").value;
    let dueDate = document.getElementById("dueDate").value;

    if (book === "" || user === "" || returnDate === "" || dueDate === "") {
        alert("Please fill all fields");
        return;
    }

    // Fine Calculation (₹10 per day late)
    let fine = 0;
    let returnD = new Date(returnDate);
    let dueD = new Date(dueDate);

    if (returnD > dueD) {
        let diffTime = returnD - dueD;
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        fine = diffDays * 10;
    }

    let record = {
        book: book,
        user: user,
        dueDate: dueDate,
        returnDate: returnDate,
        fine: fine
    };

    returnedBooks.push(record);

    displayReturnedBooks();

    // Clear inputs
    document.getElementById("bookName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("returnDate").value = "";
    document.getElementById("dueDate").value = "";
}

// Display Returned Books
function displayReturnedBooks() {
    let list = document.getElementById("returnList");
    list.innerHTML = "";

    returnedBooks.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.book}</td>
                <td>${item.user}</td>
                <td>${item.dueDate}</td>
                <td>${item.returnDate}</td>
                <td>₹${item.fine}</td>
                <td>
                    <button class="delete-btn" onclick="deleteReturn(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
        list.innerHTML += row;
    });
}

// Delete Record
function deleteReturn(index) {
    returnedBooks.splice(index, 1);
    displayReturnedBooks();
}