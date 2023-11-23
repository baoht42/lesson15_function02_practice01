//bai 1
function doExercise1(){
    alert("hello")
}
//bai 2
function doExercise2(a){
    return a= a+1;
}
function doExercise22(){
    document.write(doExercise2(2));
}

//bai3
function doExercise3(x,y){
    x = +prompt("Enter number X: ");
    y = +prompt("Enter number Y: ");
    if (x>y){
        alert("Number X is bigger than Number Y");
    }else {
        alert("Total of X,Y: "+ (x+y));
    }
}

//bai4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
function bai4() {
    result = 0;
    alert(result);
    result = addNumbers();
    alert(result);
}

// class Rectangle{
//     constructor(length, width) {
//         this.length= length;
//         this.width = width;
//     }
//     getP(){
//         let p = (this.length + this.width)*2;
//         return p;
//     }cb
//     getS(){
//         let s = this.length * this.width;
//         return s;
//     }
// }
// let rec1 = new Rectangle(4, 5);
// console.log(rec1.getP());
// console.log(rec1.length);

let arrayStar1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe","Regulus"];
let arrayStar2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major","Leo"];
function bai5(n) {
    let input1=n.toString();
    for (let i = 0; i < arrayStar1.length; i++) {
        if (input1 === arrayStar1[i]) {
            return arrayStar2[i];
        }
    }
    return "not found";
}

function doExercise5() {
    let inputStar = prompt("Enter Star: ");
    let result = bai5(inputStar);
    document.write("Ket qua la: " + result);
}
