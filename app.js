let numberContainer = document.querySelector('.rating-state__number-container');
let rateNumber = document.querySelector('.thank-state__result--number');
let submitBtn = document.querySelector('.rating-state__btn-submit');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thank-state');

numberContainer.addEventListener('click', e=>{
    let numberSelected = e.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected >0 || numberSelected <=5){
        submitBtn.addEventListener('click', ()=>{
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        });
        
    }

});

