



window.onload = function(){
    let emailModal = document.getElementsByClassName('email-modal')[0] 

    
    console.log(emailModal)
    document.documentElement.addEventListener('mouseleave', e => {
        emailModal.classList.add('email-modal--visible');
       console.log('mouse left')
    });


    console.log(document)
}