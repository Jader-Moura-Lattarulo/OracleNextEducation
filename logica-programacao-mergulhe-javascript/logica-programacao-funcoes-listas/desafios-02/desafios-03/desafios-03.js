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

function whichIsBigger(){
    let firstInput = document.querySelector("#get_first_number");
    let firstNumber = firstInput.value;

    let secoundInput = document.querySelector("#get_secound_number");
    let secoundNumber = secoundInput.value;

    let thirdInput = document.querySelector("#get_third_number");
    let thirdNumber = thirdInput.value;

    if (firstNumber > secoundNumber && firstNumber > thirdNumber) {
        return alert(`o número ${firstNumber} é o maior número entre os três.`);
    } else if (secoundNumber > firstNumber && secoundNumber > thirdNumber) {
        return alert(`o número ${secoundNumber} é o maior número entre os três.`);
    } else {
        return alert(`o número ${thirdNumber} é o maior número entre os três.`);
    }
}