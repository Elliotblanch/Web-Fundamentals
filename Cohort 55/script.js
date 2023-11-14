let array = [1, 2 , 3 , "Hello", 5]

console.log(array[1])
console.log(array[3])

let trainer = {name: 'Elliot',
                age: 27,
                role: 'learning specialist'
            };

console.log(trainer.age)

function thankYou(){
    alert("Thank you!")
}

function upgrade(){
    document.getElementById("button").style.fontSize="50px";
    document.getElementById("button").style.color="Yellow";
    document.getElementById("button").style.backgroundColor="blue";
}

function accessDenied(){
    alert("Sorry, nice try!");
    location.href ='new.html';
}