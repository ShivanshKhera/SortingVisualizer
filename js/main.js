
let inputArr = document.getElementById('generate');
let inputSpeed = document.getElementById("speed");
let inputSize = document.getElementById("array_size");

let min = 10;
let max = 100;
let arraySize = inputSize.value;
console.log(arraySize);

var butt_algos = document.querySelectorAll(".algos button");

var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

inputArr.addEventListener("click", generateArray);
inputSize.addEventListener("input", update_size);

// generateArray(max, min);
let div_array = [];
let div_array_size = [];
let sortedArray = [];

function generateArray(){
    total_delay = 0;
    div_array = [];
    div_array_size = [];
    cont.innerHTML = "";
    for(var i = 0; i < arraySize; i++) {
        div_array_size[i] = Math.floor(Math.random() * (max-min) + min);
        div_array[i] = document.createElement("div");
        cont.appendChild(div_array[i]);
        let margin_size=0.1;
        div_array[i].style=" margin:0.1%; background-color:tomato; width:" + (100/arraySize) + "%; height:" + (div_array_size[i]) + "%;";
    }
    console.log(div_array_size);
}

function update_size(){
    arraySize = inputSize.value;
    generateArray();
}
window.onload=update_size();



for(var i=0;i < butt_algos.length; i++){
    butt_algos[i].addEventListener("click", runalgo);
}

function runalgo(){
    console.log(this.innerHTML);
    if(this.innerHTML == "Bubble"){
        bubbleSort();
    }
    if(this.innerHTML == "Insertion"){
        insertionSort();
    }
    if(this.innerHTML == "Selection"){
        selectionSort();
    }
    if(this.innerHTML == "Merge"){
        mergeSort();
    }
    if(this.innerHTML == "Quick"){
        quickSort();
    }
    
}

var num = 1000;
var speed = 100;
inputSpeed.addEventListener("input", calculate_speed);
function calculate_speed(){
    total_delay = 0;
    var s=inputSpeed.value;
    console.log(s);
    if(s==1){
        speed = 1;
    }
    else if(s==2){
        speed = 10;
    }
    else if(s==3){
        speed = 50;
    }
    else if(s==4){
        speed = 100;
    }
    else{
        speed = 1000;
    }
    delay_time = num/speed;
}
var delay_time = num/speed;
var total_delay = 0;

function div_update(cont, height, color){
    window.setTimeout(function(){
        cont.style="margin:0.1%; width:" + (100/arraySize) + "%; height:" + height + "%; background-color:" + color + ";";
        },total_delay+= delay_time);
}