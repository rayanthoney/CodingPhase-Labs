



window.onload = function(){
    let emailModal = document.getElementsByClassName('email-modal')[0];

    let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];

    closeModal.addEventListener('click', e => {
        emailModal.classList.remove('email-modal--visible');
    });
    console.log(closeModal);

    
    console.log(emailModal)
    document.documentElement.addEventListener('mouseleave', e => {
        emailModal.classList.add('email-modal--visible');
       console.log('mouse left')
    });


    console.log(document)
}