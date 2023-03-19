function getfeld(x,y){
    return document.getElementById(String(String(y)+" "+String(x))) 
}
// var feld2 = document.getElementById("1 5")
// var feld2 = getfeld(4,5);
// var feld2cont = feld2.getContext("2d");
var img1 = document.getElementById("border")
var img2 = document.getElementById("sprengbares")
var img5 = document.getElementById("player")
// feld2cont.drawImage(img,0,0);

var level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1], [1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1], [1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1], [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1], [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
for (let i = 0; i<12; i++){
    for (let e = 0; e<12; e++){
        feld = getfeld(e+1,i+1);
        feldcont = feld.getContext("2d");
        
        if (level[i][e] == 2){
            feldcont.drawImage(img2, 0,0);
        }
        else if (level[i][e] == 1){
            feldcont.drawImage(img1, 0,0);
        }
        else if (level[i][e] == 5){
            feldcont.drawImage(img5, 0,0);
        }
    }
}