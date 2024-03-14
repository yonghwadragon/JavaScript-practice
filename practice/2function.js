function myFunction(x) {
    let temp = 2*x+3
    return temp
}

function add(x,y) {
    let temp = x+y              //;는 끊어주는 용이라서 없어도 있어도 작동된다.
    return temp
}

add(1,2)
3

//위는 전통적인 방법이고 아래는 요즘 방법
add = (x,y) => {
    let temp = x+y;
    return temp;
}

//아래 방법도 있다.
((x,y) => {return x+y})(1,2)

//입력과 출력이 없을 수도 있다. 묶는 용도로 많이 쓰인다.

function fly() {
    openWings();
    while (true) {
        moveWings();
    }
}

fly()

//함수 = 코드 묶음. 이라고 생각하기.