var counter=0;
var names = ["husbands", "favorite", "work"];
var percentages = [35, 90, 75];

var size = 3;

function addUser(){

    var user = document.createElement("section");
    var formUser = document.getElementById("users");
    formUser.appendChild(user); 
    user.id = "user" + counter;
    user.className = "user";
    addPic();
    title();
    counter++;
    console.log(user);
    return user;
}

function users(){

    for(var i = 0; i < size; i++){
        addUser();
    }
    document.getElementById("plus").addEventListener("click",plus);

}

function plus(){
    location.replace("form.html"); 
}

function addPic(){
    var car = document.createElement("section");
    var formCar = document.getElementById("user" + counter);
    formCar.appendChild(car); 
    car.className = "car"+" "+"car"+ counter;

    return car;
}

function title(){

    var div = document.getElementById("user" + counter);
    div.innerHTML += names[counter] + " " + "car" + "<br>" + "car status: " + percentages[counter] + "%";
    
}




    