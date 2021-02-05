const randomPin = document.getElementById('randomPinGenerator');
randomPin.addEventListener("click", function(event){
    console.log("Kichu na ");
    let floor = Math.floor(1000 + Math.random() * 9000);
    let random = parseInt(floor);
    console.log(random);
    const GeneratedPinField = document.getElementById('form-control');
    GeneratedPinField.value = random;
})

const digitBtn = document.getElementById('digits');
digitBtn.addEventListener('click',function(event){
    const digit = event.target.innerText;
    const typedInput = document.getElementById('inputField');

    if (isNaN(digit)) {
        console.log("not digit")
        if (digit === 'C'){
            typedInput.value = "";
        }
        if (digit === 'B'){
            const input = typedInput.value;
            const newInput = input.slice(0, -1);
            typedInput.value = newInput;
        }
    }
    else {
        console.log(digit);
        typedInput.value = typedInput.value + digit;
        
    }
})


const matchingInput = document.getElementById('pinMatching');
matchingInput.addEventListener("click", function(){
    const typedInput = document.getElementById('inputField');
    const GeneratedPinField = document.getElementById('form-control');
    console.log(typedInput.value);
    console.log(GeneratedPinField.value);

    const pinNotMatched = document.getElementById('notMatched');
    const pinMatched = document.getElementById('matched');

    if (typedInput.value == GeneratedPinField.value)
    {
        console.log("Nihal");
        pinNotMatched.style.display = "none";
        pinMatched.style.display = "block";
    }
    else{
        console.log("not nihal");
        pinNotMatched.style.display = "block";
        pinMatched.style.display = "none";
    }

})


// 2
// var str = "Hello TecAdmin!";
// var newStr = str.slice(0, -1);
// console.log(newStr);
