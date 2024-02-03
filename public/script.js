
var displayinput=document.getElementById("displayInput");

function getVal(a){
    displayinput.value+=a;
}
function calculate(){
displayinput.value=eval(displayinput.value)
}
function clean(){
    displayinput.value = "";
}