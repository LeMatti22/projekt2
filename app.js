
document.querySelector("#red").addEventListener("change", updateColor);
document.querySelector("#green").addEventListener("change", updateColor);
document.querySelector("#blue").addEventListener("change", updateColor);
document.querySelector("#contrast").addEventListener("change", updateColor);

const lorem = document.querySelector(".lorem");
const contrastValue = document.querySelector(".contrastValue");

function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    document.body.style.backgroundColor = "rgb(" + red + "," +  green  + "," + blue +")";
    lorem.style.color = "rgb(" + red + "," +  green  + "," + blue +")";

    let angle = document.getElementById("contrast").value;
    lorem.style.filter = "hue-rotate(" + angle + "deg)";

}

