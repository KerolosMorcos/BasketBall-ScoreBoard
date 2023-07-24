let btn1v = document.getElementById("btn1")
let btn1v2 = document.getElementById("btn2")
let btn1v3 = document.getElementById("btn3")
let btn1v4 = document.getElementById("btn4")
let btn1v5 = document.getElementById("btn5")
let btn1v6 = document.getElementById("btn6")
let score1v = document.getElementById("score1")
let count = 0
let score2v = document.getElementById("score2")
let count2 = 0

function inc1()
{
    count += 1
    score1v.innerText = count
    
}function inc2()
{
    count += 2
    score1v.innerText = count
    
}function inc3()
{
    count += 3
    score1v.innerText = count
    
}function inc4()
{
    count2 += 1
    score2v.innerText = count2
}function inc5()

{
    count2 += 2
    score2v.innerText = count2
}function inc6()

{
    count2 += 3
    score2v.innerText = count2
}

function reset() 
{
    count = 0;
    count2 = 0;
    score1v.innerText = count
    score2v.innerText = count2
}