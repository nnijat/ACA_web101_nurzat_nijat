var score = 0; //int var
let iterator = 1; //starting let;

//hard coding "Score" plus quantity of click
document.getElementById("score").innerHTML = "Score: " + score; //hard coding ""

function punch(onOff){   
  //this is logic for each click to increase The Score   
  score += iterator;
  document.getElementById("score").innerHTML = "Score: " + score;
  //Calling helper methond in here
  switchFace(onOff)
}

function switchFace (onOff) {
    /*This is the logic for switching image.
    when clicking is happened, the image will switch 
    from smile face to punched crying face.
    */
    if (onOff=="smile"){
        document.getElementById("crying").style.display = "none";
    }
    else if (onOff=="crying") {
        document.getElementById("smile").style.display = "none";
    } 
}

function reset (){
    //clear the score
    document.getElementById("score").innerHTML = "Score: " + " ";
}