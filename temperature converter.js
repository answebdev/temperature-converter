//Temperature Converter (original):
//var output = document.getElementById("output");
//var question = prompt("Choose one: 1. Celsius to Fahrenheit OR 2. Fahrenheit to Celsius");
//
//if (question == 1) {
//    var cel = prompt("What is the temperature in Celsius?");
//    var toFar = (cel * 9)/5+32;
//    output.innerHTML = cel + "&#176; Celsius = " + toFar + "&#176; Fahrenheit";
//}
//
//if (question == 2) {
//    var far = prompt("What is the temperature in Fahrenheit?");
//    var toCel = (far - 32) * 5/9;
//    output.innerHTML = far + "&#176; Fahrenheit = " + toCel + "&#176; Celsius";
//}


//Stylized version:
function convert1() {
    var c = document.getElementById("cel").value;
    var toFar = (c * 9) / 5 + 32;
    //    output.innerHTML = c + "&#176; Celsius = " + toFar + "&#176; Fahrenheit";
    return document.getElementById("result1").value = toFar;
}

function convert2() {
    var f = document.getElementById("fahr").value;
    var toCel = (f - 32) * 5 / 9;
    //    output.innerHTML = f + "&#176; Fahrenheit = " + toCel + "&#176; Celsius";
    return document.getElementById("result2").value = toCel;
}

document.getElementById("cel")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("celButton").click();
        }
    });

document.getElementById("fahr")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("celFahr").click();
        }
    });
