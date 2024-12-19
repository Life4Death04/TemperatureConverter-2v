const dropList = document.getElementsByClassName('display-container');
const optionsContainer = document.getElementsByClassName('options-container');
const convertInput = document.getElementById('temperatureValue');
const finalResult = document.querySelector('.displayResult');

for(i=0; i<dropList.length; i++){
    dropList[i].addEventListener('click', function(e){
        let optionList = this.nextElementSibling;
        let caretDisplay = this.lastElementChild
        optionList.classList.toggle('hidden');
        caretDisplay.classList.toggle('rotate');
    })
}

for(i=0; i < optionsContainer.length; i++){
    optionsContainer[i].addEventListener('click', function(e){
        if(e.target !== this){
            let displayValueShow = this.previousElementSibling.firstElementChild;
            let caretDisplay = this.previousElementSibling.lastElementChild;
            displayValueShow.innerText = e.target.innerText;
            caretDisplay.classList.toggle('rotate');
            this.classList.toggle('hidden');
        }
    })
}

function calculate(e){
    let fromUnit = dropList[0].firstElementChild.innerText;
    let toUnit = dropList[1].firstElementChild.innerText;
    
    if(convertInput.value !== ""){
        switch(fromUnit){
            case "Farenheit":
                switch(toUnit){
                    case 'Celseus': finalResult.innerText =  (5/9)*(convertInput.value-32) + '°'; break;

                    case 'Kelvin': finalResult.innerText =   (5/9 * (convertInput.value-32))+273.15 + '°'; break;

                    default: finalResult.innerText = convertInput.value + '°'; break;
                }
            break;
            
            case 'Celseus':
                switch(toUnit){
                    case 'Farenheit': finalResult.innerText = ((9/5)*convertInput.value)+32 + '°'; break;

                    case 'Kelvin': finalResult.innerText = convertInput.value + 273.15 + '°'; break;

                    default: finalResult.innerText = convertInput.value + '°'; break;
                }
            break;
                
            case 'Kelvin':
                switch(toUnit){
                    case 'Farenheit': finalResult.innerText = ((9/5)*(convertInput.value-273.15))+32 + '°'; break;

                    case 'Celseus': finalResult.innerText = convertInput.value-273.15 + '°'; break;

                    default: finalResult.innerText = convertInput.value + '°'; 
                }
            break;
        }
    }else{
        alert("Ingrese un valor valido para convertir");
    }
}