//Variables
var buttonToggle = true;
var checkboxToggle = false;
var newText = document.getElementById("textInput").value;


//console
console.log("Program start");
console.log(buttonToggle);


//Functions 
function onClick () {
    if(checkbox.checked) {
        console.log("Checked")
    } else {
        console.log("Not Checked")
    }
}

function toggle () {
    console.log(checkbox.checked);
}

function submitText () {
    newText = document.getElementById("textInput").value;
    document.getElementById("paragraph").innerHTML = newText;
    console.log("New text set to: ",newText);
}

window.location.href("index2.html")