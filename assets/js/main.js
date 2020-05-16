var colorCode = [];
var selectedRGB = 0;
var numberAttemp = 0;

function start(){
    colorCode = [];
    selectedRGB = 0;
    numberAttemp = 0;
    document.getElementById("result").innerHTML ="";
    for (let i = 0; i < 15; i++) {
        colorCode.push(Math.floor(Math.random() * 255));
    }
    for (let i = 0; i < 5; i++) {
        buttonNumber = "button" + i;
        document.getElementById(buttonNumber).disabled = false;
        document.getElementById(buttonNumber).style.backgroundColor = "rgb(" + colorCode[3*i] + "," + colorCode[3*i+1] + "," + colorCode[3*i+2] + ")";
    }   
    selectedRGB = Math.floor(Math.random() * 4);
    document.getElementById("rgbCode").innerHTML = "rgb(" + colorCode[3*selectedRGB] + "," + colorCode[3*selectedRGB+1] + "," + colorCode[3*selectedRGB+2] + ")";
}

function boxSelection(selectedBox){
    if (selectedBox == selectedRGB) {
        document.getElementById("result").innerHTML = "Well done!"
        for (let i = 0; i < 5; i++) {
            buttonNumber = "button" + i;
            document.getElementById(buttonNumber).disabled = true;
        }  
    }
    else {
        numberAttemp++;
        if (numberAttemp < 5) {
            document.getElementById("result").innerHTML = "Please try again!"
        }
        else {
            start();
        }
    }
}