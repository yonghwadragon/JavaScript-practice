//조건문
if (money > 5000) {
    reideTaxi();
}

// 아닐때도 포함
if (money > 5000) {
    reideTaxi();
} else {
    Walk();
}

//복잡하게
if (money > 5000) {
    reideTaxi();
} else if (money >2000) {
    reideBus();
} else {
    walk();
}

//실습
let a=6000
undefined
if (a>5000){
        console.log("택시타기");
}

//2
let b=3000

undefined
if (b>5000){
        console.log("택시타기");
}
undefined

//3
let money = 3000;
undefined
if (money>5000){
        console.log("택시타기");
} else {
    console.log("걷기");
}