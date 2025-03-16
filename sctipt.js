// Анимации и интерактив
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.animation = `fadeIn 1s forwards`;
      }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Онлайн-чат
const chatIcon = document.querySelector('.chat-icon');
chatIcon.addEventListener('click', () => {
  alert('Чат открыт!');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Функция для показа текущего слайда
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Функция для перехода к следующему слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(nextSlide, 5000);

// Показ первого слайда при загрузке страницы
showSlide(currentSlide);