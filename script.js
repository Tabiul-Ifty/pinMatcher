const randomPin = document.getElementById('randomPinGenerator');
randomPin.addEventListener("click", function(event){
    console.log("Kichu na ");
    let floor = Math.floor(1000 + Math.random() * 9000);
    let random = parseInt(floor);
    console.log(random);
    const GeneratedPinField = document.getElementById('form-control');
   
    GeneratedPinField.value = random;
})