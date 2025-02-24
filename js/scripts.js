let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

/* function emailSend() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var event = document.getElementById('event').value;
    var quantity = document.getElementById('quantity').value;

    var messageBody  = 'Name: ' + name + '\n';
    messageBody += 'Email: ' + email + '\n';
    messageBody += 'Event: ' + event + '\n';
    messageBody += 'Quantity: ' + quantity + '\n';

    Email.send({
        Host : "smtp.mailendo.com",
        Username : "fernandoarosha92@gmail.com",
        Password : "DC0D2D0019E4C120F07AFFB863809C317A41",
        To : 'them@website.com',
        From : "fernandoarosha92@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}*/ 