function showPlace(place){
    alert("You selected"+ place);
}
let hour=new Date().getHours();
let greeting;

if(hour < 12){
    greeting="Good Morning!";
} else if(hour <18){
    greeting="Good Afternoon!";
}
else{
    greeting="Good Evening!";
}
document.getElementById("greet").innerHTML=greeting;

function showPlace(place){
    document.getElementById("info").innerHTML=        "You want to visit  "  +  place;
}
function changeColor(){
    document.body.style.background="lightblue";
}