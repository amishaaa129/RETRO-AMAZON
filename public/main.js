// main.js
document.getElementById("category-select").addEventListener("change", function() {
    var selectedCategory = this.value;
    var section = document.getElementById(selectedCategory);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
});
