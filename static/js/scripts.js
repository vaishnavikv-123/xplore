

var a=document.getElementById("name")
var button=document.getElementById("btn")
var counter=0;
function abc()
{
a.innerHTML=counter;
counter++;
}
button.addEventListener("click",abc)


var button=document.getElementById("btn1")
function def()
{
    a1.innerHTML=counter;
    counter++;
}
button.addEventListener("click",def)
