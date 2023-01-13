const inputField = ".color";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(inputField).addEventListener("input", function() {
        var value = this.value;

        if (value.startsWith("#")) {
            // Input is in hexadecimal format
            document.body.style.backgroundColor = value;
        } else if(value.startsWith("rgb(")) {
            // Input is in vanila RGB format
            var match = value.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (match) {
              var red = match[1], green = match[2], blue = match[3];
              document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            }
        } else {
            // Input is in RGB format
            document.body.style.backgroundColor = "rgb(" + value + ")";
        }
     });
});