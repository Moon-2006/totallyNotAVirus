//Variables and setup
var buttonToggle = true;
var checkboxToggle = false;
var newText = document.getElementById("textInput").value;
var diffuculty = 4;
var numString = [];

showTextBox();

//diffuculty += 1



//console
console.log("Program start");
console.log(buttonToggle);


//Functions 

function showTextBox() {
    var x = document.getElementById("textBox");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function showOnStart() {
    var x = document.getElementById("showOnStart");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//onClick
function onClick () {
    //generate random numbers
    for (var i = 0; i < diffuculty; i++){
        var randomNum = getRand();
        document.getElementById("numberSlot").innerHTML += " " + randomNum;
        numString += randomNum;
    }    

    //timer
    var originTime = new Date().getTime();

    var loop = setInterval(function(){
        var now = new Date().getTime();
        var timeLeft = originTime-now;
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000) + 7;
        checkHide();
        if(seconds >= 0){
            document.getElementById("timer").innerHTML = seconds;
        }
    }, 1000);

    console.log(Timer.getTime());
    showOnStart();
}


//Checkbox
function toggle () {
    checkHide();
    console.log(checkbox.checked);
}

//Change text
function submitText () {
    newText = document.getElementById("textInput").value;
    document.getElementById("paragraph").innerHTML = newText;
    console.log("New text set to: ",newText);
}

//Add random number
function getRand () {
    var getRandNum = Math.floor(Math.random()*10);
    return(getRandNum);
}

//Hide string of numbers
function hideNums() {
    document.getElementById("numberSlot").innerHTML = ("Times up! enter the numbers you just saw in the box below")
    showTextBox();
}
