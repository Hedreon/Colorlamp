const inputField = ".color";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(inputField).addEventListener("input", function() {
        var value = this.value;

        if (value.startsWith("#")) {
            // Input is in hexadecimal format
            document.body.style.backgroundColor = value;
        } else {
            // Input is in RGB format
            document.body.style.backgroundColor = "rgb(" + value + ")";
        }
     });
});