function toggleColor() {
    var image = document.getElementById("image");

    if (image.getAttribute("class") == "green") {
        image.setAttribute("class", "red");
        return;
    }

    if (image.getAttribute("class") == "red") {
        image.setAttribute("class", "green");
    }
}
