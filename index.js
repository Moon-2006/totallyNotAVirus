//Variables
var buttonToggle = true;
var checkboxToggle = false;
var newText = document.getElementById("textInput").value;
var originTime = new Date().getTime();
var loop = setInterval(function(){
    var now = new Date().getTime();
    var timeLeft = originTime-now;
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000) + 12;
    if(seconds >= 0){
        document.getElementById("timer").innerHTML = seconds;
    }
}, 1000)


//console
console.log("Program start");
console.log(buttonToggle);


//Functions 
function onClick () {
    console.log(Timer.getTime());
}

function toggle () {
    console.log(checkbox.checked);
}

function submitText () {
    newText = document.getElementById("textInput").value;
    document.getElementById("paragraph").innerHTML = newText;
    console.log("New text set to: ",newText);
}
