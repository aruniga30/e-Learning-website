
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function backspace() {
    var size = document.getElementById("result").value.length;
    document.getElementById("result").value =  document.getElementById("result").value.substring(0,size-1);
}

function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}