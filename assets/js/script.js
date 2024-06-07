const images = [
    "./assets/imgs/oceano.jpg",
    "./assets/imgs/bannergolfin.jpg",
    "./assets/imgs/baleiabanner.jpg"
];

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');

let counter = 1;

function slideImages() {
    if (counter >= images.length) {
        counter = 0;
    }

    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-counter * 100}%)`;

    counter++;
}

images.forEach((image, index) => {
    carouselImages[index].src = image;
});

setInterval(slideImages, 4500);

// LOGIN & LOGOUT

const loginLink = document.getElementById('login-link');

// Verifica se o usuário está logado ao carregar a página
if (localStorage.getItem('loggedInUser')) {
    loginLink.textContent = localStorage.getItem('loggedInUser');
    loginLink.href = '#'; // Link de logout (a implementar)
}

// Lógica para logout
loginLink.addEventListener('click', function(event) {
    event.preventDefault();

    if (localStorage.getItem('loggedInUser')) {
        localStorage.removeItem('loggedInUser');
        window.location.href = '../index.html'; // Redireciona para a página inicial
    }
});

