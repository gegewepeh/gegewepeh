let x = prompt("Please enter a number from 0 to 5 you would like to guess", "0");
let score = 0
document.getElementById(`score`).innerHTML = 0

function random(){
    let arr = [
        ['','','',''],
        ['','','',''],
        ['','','','']
]

    let numList = [1,2,3,4,5,6,7,8,9,10,11,12]

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            let num = Math.floor(Math.random() * 6)
            if(arr[i][j] === ''){
                arr[i][j] = num
            }
        }
    }
    return arr
}

function getNum(){
    let arr = random()
    document.getElementById(`1`).innerHTML = arr[0][0]
    document.getElementById(`2`).innerHTML = arr[0][1]
    document.getElementById(`3`).innerHTML = arr[0][2]
    document.getElementById(`4`).innerHTML = arr[0][3]
    document.getElementById(`5`).innerHTML = arr[1][0]
    document.getElementById(`6`).innerHTML = arr[1][1]
    document.getElementById(`7`).innerHTML = arr[1][2]
    document.getElementById(`8`).innerHTML = arr[1][3]
    document.getElementById(`9`).innerHTML = arr[2][0]
    document.getElementById(`10`).innerHTML = arr[2][1]
    document.getElementById(`11`).innerHTML = arr[2][2]
    document.getElementById(`12`).innerHTML = arr[2][3]


    return arr
}

function klik1 (){
    console.log(x, 'masuk klik 1')
    if (document.getElementById(`1`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`1`).style.color = "black";
    } else {
        document.getElementById(`1`).style.color = "black";
    }
}

function klik2 (){
    console.log(x, 'masuk klik 2')
    if (document.getElementById(`2`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`2`).style.color = "black";
    } else {
        document.getElementById(`2`).style.color = "black";
        return
    }
}

function klik3 (){
    if (document.getElementById(`3`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`3`).style.color = "black";
    } else {
        document.getElementById(`3`).style.color = "black";
        return
    }
}

function klik4 (){
    if (document.getElementById(`4`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`4`).style.color = "black";
    } else {
        document.getElementById(`4`).style.color = "black";
        return
    }
}

function klik5 (){
    if (document.getElementById(`5`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`5`).style.color = "black";
    } else {
        document.getElementById(`5`).style.color = "black";
        return
    }
}

function klik6 (){
    if (document.getElementById(`6`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`6`).style.color = "black";
    } else {
        document.getElementById(`6`).style.color = "black";
        return
    }
}

function klik7 (){
    if (document.getElementById(`7`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`7`).style.color = "black";
    } else {
        document.getElementById(`7`).style.color = "black";
        return
    }
}

function klik8 (){
    if (document.getElementById(`8`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`8`).style.color = "black";
    } else {
        document.getElementById(`8`).style.color = "black";
        return
    }
}

function klik9 (){
    if (document.getElementById(`9`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`9`).style.color = "black";
    } else {
        document.getElementById(`9`).style.color = "black";
        return
    }
}

function klik10 (){
    if (document.getElementById(`10`).innerHTML == x){
        score++
        document.getElementById(`10`).style.color = "black";
    } else {
        document.getElementById(`10`).style.color = "black";
        return
    }
}

function klik11 (){
    if (document.getElementById(`11`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`11`).style.color = "black";
    } else {
        document.getElementById(`11`).style.color = "black";
        return
    }
}

function klik12 (){
    if (document.getElementById(`12`).innerHTML == x){
        score++
        document.getElementById(`score`).innerHTML = score
        document.getElementById(`12`).style.color = "black";
    } else {
        document.getElementById(`12`).style.color = "black";
        return
    }
}
console.log(getNum())