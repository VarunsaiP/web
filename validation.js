document.getElementById("myForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    
    if (name.trim() === "") {
        alert("Name field cannot be empty!");
        event.preventDefault(); // Stops form submission
    }
});