const API = "https://library-management-backend-88w2.onrender.com";

document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    let res = await fetch(API + "/api/reports");
    let data = await res.json();

    alert(
        "Total Books: " + data.books +
        "\nIssued: " + data.issued +
        "\nReturned: " + data.returned +
        "\nTotal Fine: ₹" + data.totalFine
    );
});
