// Wait for page load
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop actual form submit

        let reportType = document.querySelector("select").value;

        if (reportType === "issued") {
            alert("Showing Issued Books Report");
        } 
        else if (reportType === "returned") {
            alert("Showing Returned Books Report");
        } 
        else if (reportType === "overdue") {
            alert("Showing Overdue Books Report");
        }
    });

});