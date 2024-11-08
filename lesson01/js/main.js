//This code below is for the functionality of the read more button on the matches page
const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=> {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read Less') ? "Read More" : "Read Less";
})


