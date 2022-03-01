
window.onload = function(){
// Variables
    let emailState = false;

    let emailModal = document.getElementsByClassName('email-modal')[0];

    let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
    
    let emailInput = document.getElementsByClassName('email-modal__input')[0];
    
    let emailButton = document.getElementsByClassName('email-modal__button')[0];
    
// Function to validate email (RegExp)
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
    }

// Event Listener for the click button on form
    emailButton.addEventListener('click', () => {
        if(emailIsValid(emailInput.value)) {
            console.log(emailInput.value)  
         } else {
        document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error')
        document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active')        
         }         
    })

// Variable = let Function = if
    let showModal = () => {        
       if(emailState == false) {
           emailModal.classList.add('email-modal--visible');
           emailState = true 
        }
    }

    closeModal.addEventListener('click', () => {
        emailModal.classList.remove('email-modal--visible');
    });
// Trigger Function   
    document.body.addEventListener('mouseleave', () => {  
        showModal();
    });
    


    console.log(document)
}