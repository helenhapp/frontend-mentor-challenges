const ratingCard = document.querySelector('#rating-card');
const thankYouCard = document.querySelector('#thankyou-card');
const submitBtn = document.querySelector('#submit-btn');
const ratingSpan = document.querySelector('#ratingOutput');
const ratingInputs = document.querySelectorAll('.rating-input');

ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
        submitBtn.disabled = false;
        ratingSpan.innerHTML = input.value;
    });
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (submitBtn.disabled == false) {
        ratingCard.classList.add('hidden');
        thankYouCard.classList.remove('hidden');
    }
});
