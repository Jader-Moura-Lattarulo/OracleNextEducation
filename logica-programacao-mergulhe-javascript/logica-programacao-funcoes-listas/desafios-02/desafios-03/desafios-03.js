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
    let numberInput = document.querySelector("#get_number_double");
    let number = numberInput.value;
    let double = number * 2;
    return alert(`O dobro do número ${number} é ${double}.`);
}

function whichIsBigger(){

    let biggestNumber = Math.max(
        parseFloat(document.querySelector("#get_first_number").value),
        parseFloat(document.querySelector("#get_secound_number").value),
        parseFloat(document.querySelector("#get_third_number").value)
    );

    return alert(`o número ${biggestNumber} é o maior número entre os três.`);
} 

function whichIsBigger2(){

    let biggestNumber = Math.max(
        parseFloat(document.querySelector("#get_first_number").value),
        parseFloat(document.querySelector("#get_secound_number").value)
    );

    return alert(`O número ${biggestNumber} é o maior número entre os dois.`);
} 

function squareOfNumber(){
    let number = document.querySelector("#get_number_square").value;

    let square = number * number;

    return alert(`O número ${number} multiplicado por ele mesmo tem por resultado ${square}.`)
}