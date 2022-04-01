
// const btn = document.querySelector('.btn');
// const btnText = document.querySelector('.btn-text');
// const btnText2 = document.querySelector('.btn-text-2');
const clearBtn = document.querySelector('.clear');
const consoleContainer = document.querySelector('.console .log');
const form = document.querySelector('form');
const input = document.querySelector('input');
// const modal = document.querySelector('.modal');

const submitForm = (event) => {
    event.preventDefault()
    alert("Prevented Form Submission");
    console.log("🚀 ~ file: index.html ~ line 117 ~ submitForm ~ e", event.currentTarget)
}
const inlineSubmitForm = (event) => {
    console.log("🚀 ~ file: index.html ~ line 117 ~ submitForm ~ e", event)
    return false
}

// const mouseover = (event) => {
//     const message = "Modal Mouseover";
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// }
// const mouseout = (event) => {
//     const message = "Modal Mouseout";
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// }



// ADD EVENT LISTENERS BELOW
// window.addEventListener('load', (event) => {
//     alert("Window loaded!", event)
// })
// window.addEventListener('resize', (event) => {
//     alert("Window Resized!", event)
// })
// window.addEventListener('scroll', (event) => {
//     alert("Window Scrolled!", event)
// })
// form.addEventListener('submit', submitForm)
// input.addEventListener('focus', (event) => {
//     const message = 'Input Focused';
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// })
// input.addEventListener('blur', (event) => {
//     const message = 'Input Blurred (Un-focused)';
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// })
// modal.addEventListener('mouseout', mouseout)
// modal.addEventListener('mouseover', mouseover)
// modal.addEventListener('click', (event) => {
//     const message = 'Modal Clicked'
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// });
// btn.addEventListener('click', (event) => {
//     const message = 'Button Clicked 1'
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// });
// btn.addEventListener("click", (event) => {
//     const message = 'Button Clicked 2'
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// });
// btn.addEventListener("click", (event) => {
//     const message = 'Button Clicked 3'
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// });
// btn.addEventListener("click", (event) => {
//     const message = 'Button Clicked 4'
//     console.log(`${message} - Event`, event)
//     console.log(`${message} - Target`, event.target)
//     console.log(`${message} - Current Target`, event.currentTarget)
//     var p = document.createElement('p');
//     p.innerText = message;
//     consoleContainer.append(p);
// });
// btnText.addEventListener("click", (event) => {
//     console.log("🚀🚀 ~ file: index.html ~ line 17 ~ btn.addEventListener ~ e", event)
// });
// btnText2.addEventListener("click", (event) => {
//     console.log("🚀🚀🚀 ~ file: index.html ~ line 17 ~ btn.addEventListener ~ e", event)
// });
clearBtn.addEventListener('click', (event) => {
    consoleContainer.innerHTML = "";
})
