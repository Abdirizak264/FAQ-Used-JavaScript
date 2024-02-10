
// get the value from HTML with accordion and store the value in varaible accordions
var accordions = document.getElementsByClassName("accordion");

// itearte the accordions collection and add event listener for each element
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        // Toggle active calss to show or remove
        // Assign panel avriable for the answer that question
        this.classList.toggle("active"); 
        var panel = this.nextElementSibling; 

        // if the panel is showing hide else display
        if (panel.style.display === "block") {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}
