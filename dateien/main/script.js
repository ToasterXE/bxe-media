const button1 = document.querySelector(".button1");
button1_counter = 0
function button1_fn(){
    let col;
    (button1_counter % 2) ? col = "rgb(255,255,255)" : col = "rgb(20,20,20)";
    button1.style.backgroundColor = col;
    button1_counter += 1;
}

button1.addEventListener('click', (button1_fn));
//button1.onclick = button1_fn;

button2 = document.querySelector(".button2");
const bigratimg = document.getElementById("bigratimg1")
function button2_fn() {
    bigratimg.height -= 4;
    bigratimg.width -= 5;
    //button2.height -= 5;
    if (bigratimg.height <= 0) {
        bigratimg.height = 310;
        bigratimg.width = 410;
    }
}
button2.addEventListener('click', (button2_fn));
const button2col = document.querySelector("#eeee")

function update() {
if (bigratimg.height === 310){
    button2col.height = 70 
}
}
let datum = new Date();
const datumtext = document.querySelector(".datum");
datumtext.textContent = datum;

setInterval(update_date,1000);
setInterval(update, 1000)

function update_date() {
    let datum = new Date();
    datumtext.textContent = datum;
}