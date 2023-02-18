btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result"); 
radioButtons = document.querySelectorAll('[name="deserts"]'); 

btnElement.addEventListener("click", function(){  
    let totalSum = 0;                
    for (const radioButton of radioButtons){     
        if(radioButton.checked){                  
            totalSum += parseInt(radioButton.value);  
        }
    }
    if (totalSum != 0) { 
        resultElement.textContent = `${totalSum} руб.`;
    } else {
        resultElement.textContent = "0 руб.";
    }
});
