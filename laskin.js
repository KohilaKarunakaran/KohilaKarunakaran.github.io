let numbr1 = 0;
let numbr2 = 0;
let operator = "";
/* lisää uuden numeron tekstikentään */
function add(newValue) {
let input = document.getElementById("display");
input.value = input.value + newValue;
}
/* lisää pisteen (ei pilkku) tekstikentään */
function addComma() {
    let input = document.getElementById("display");
    input.value = input.value + ".";
}
/*tyhjentää tekstikentään */
function clearDisplay() {
    let input = document.getElementById("display");
    input.value = ""; //tyhjä sisältö
}
function selectOperator() {
    let select = document.getElementById("operator");
    //onko joku laskutoimitus valittu?
    if( select.selectedIndex > 0) {
        let input = document.getElementById("display");
        numbr1 = input.value;
        //otetaan laskutoimitus talteen
        operator = select.options[select.selectedIndex].value;
        input.value = "";
        select.selectedIndex = 0;

    }

}

/* laskee */
function calculate() {
    let result = 0;
    // lue toinen luku tekstikentästä
    let input = document.getElementById("display");
    numbr2 = input.value;
    if ( operator == "+") {
        result = parseFloat(numbr1) +  parseFloat(numbr2) ;
    }
    if ( operator == "-") {
        result = numbr1 - numbr2 ;
    }
    if ( operator == "*") {
        result = numbr1 * numbr2 ;
    }if ( operator == "/") {
        result = numbr1 / numbr2 ;
    }

    // Selvitä mikä laskutoimitus lasketaan

    // laita tulos  tesktikenttään
input.value = result;

numbr1 = 0;
numbr2 = 0;
operator = "";

}