const number = document.getElementById("number");
const balance = document.getElementById("number");
const moneyplus = document.getElementById("number");
const moneyminus = document.getElementById("number");
 
container.addEventListener('ADD TRANSACTION', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //Get the values from the input

    const numberValue = number.value.trim();
    const balanceValue = balance.value.trim();
    const moneyplusValue = moneyplus.value.trim();
    const moneyminusValue = moneyminus.value.trim();
     
    if(balanceValue === "number"){
        return{
            addValue
        }
        // "money-plus".;
    }
}