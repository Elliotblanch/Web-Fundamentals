let trainer = {name: 'Elliot',
                age: 27,
                role: 'Learning Specialist'
            }
console.log(trainer.role)

function thankYou(){
    alert("Thanks for clicking me!")
}

function upgrade(){
    document.getElementById("button").style.backgroundImage = "URL(Doggo.jpg)";
    document.getElementById("button").style.color = "green";
}

function upgrade2(){
    document.getElementById("button2").style.fontFamily = "Comic Sans MS";
    document.getElementById("button2").style.color = "hotpink";
    document.getElementById("button2").style.fontSize = "200px";
}

function helloWorld(){
    console.log('Hello world!')
}

function accessDenied(){
    alert("Sorry, nice try!");
    location.href = "new.html";
}
