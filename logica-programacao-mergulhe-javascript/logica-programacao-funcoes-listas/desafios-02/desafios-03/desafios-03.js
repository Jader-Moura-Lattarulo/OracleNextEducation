function helloWorld() {
    console.log("Hello, world!");
}

helloWorld();

function helloName(){
    let nameInput = document.querySelector("#get_name");
    let name = nameInput.value;
    return alert(`Olá, ${name}!`);
}

function doubleTheNumber(){
    let numberInput = document.querySelector("#get_number");
    let number = numberInput.value;
    let double = number * 2;
    return alert(`O dobro do número ${number} é ${double}.`);
}

