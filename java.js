const inputValue_1 = document.getElementById('number11')
const inputValue_2 = document.getElementById('number22')
const buttonAdd = document.querySelector('.buttons_ope')


buttonAdd.addEventListener('click', function(){
    let value1 = Number (inputValue_1.value);
    let value2 = Number (inputValue_2.value)
    let result = value1 + value2
    
//create html for result:
    const affichage = document.createElement("h3")
    affichage.innerText = "result: " + result;
    document.querySelector("body").appendChild(affichage);
})

//buttons.addEventListener('click', e=>){
    //if(e.target.matches('buttons')){

    
