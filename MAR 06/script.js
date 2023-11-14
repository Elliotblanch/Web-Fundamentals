let trainer = {name : 'Elliot',
                age : 26,
                role: 'Learning Specialist'
};

console.log(trainer.role)

function thankYou(){
    alert("Thank you!");
}

function helloWorld(){
    console.log('Hello World')
}

function accessDenied(){
    alert("Sorry, nice try!");
    location.href = 'page 2.html';
}

function colourChange(){
    document.getElementById("button").style.fontSize = "50px";
    document.getElementById("button").style.color = "green";
    document.getElementById("button").style.backgroundColor = "red";
}