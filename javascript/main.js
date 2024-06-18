// faq__info-answer show ! 

document.querySelectorAll('.faq__info-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.parentNode.querySelector('.faq__info-answer');
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Sign in Sign up

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

