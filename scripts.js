// ===============================
// Общие Функции и Инициализация
// ===============================

// Плавная прокрутка при клике на якорные ссылки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Закрыть боковое меню после клика (для мобильных)
        if (sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
        }
    });
});

// ===============================
// Переключение Языков (RU/EN)
// ===============================

// Получаем кнопки переключения языка
const langRuButton = document.getElementById('lang-ru');
const langEnButton = document.getElementById('lang-en');

// Объект с переводами
const translations = {
    'ru': {
        'home': 'Главная',
        'about': 'Обо мне',
        'outfits': 'Образы',
        'services': 'Мои Услуги',
        'testimonials': 'Отзывы',
        'news': 'Новости',
        'contact': 'Контакты',
        'main-title': 'Владислав Александрович Харченко',
        'subtitle': 'Дизайн одежды и создание уникальных образов',
        'cta': 'Посмотреть коллекцию',
        'collection-description-1': 'Материалы: - <br>Вдохновение: Япония, Ку-клукс-клан, дешёвые больше костюмы',
        'collection-description-2': 'Материалы: грубая ткань, шерсть<br>Вдохновение: уличная мода',
        'collection-description-3': 'Материалы: синтетика<br>Вдохновение: Англия',
'collection-description-4': 'Материалы: синтетика<br>Вдохновение: Рабочие в США',
        'share': 'Поделиться',
         'service-title-1': 'Разработка Уникальных Образов',
        'service-description-1': 'Создаю индивидуальные образы, отражающие вашу личность и стиль. От идеи до реализации – полный цикл разработки дизайна одежды.',
        'service-title-2': 'Дизайн Коллекций',
        'service-description-2': 'Разрабатываю целостные коллекции одежды, сочетающие в себе актуальные тренды и уникальные дизайнерские решения.',
        'service-title-3': 'Технический Чертеж',
        'service-description-3': 'Предоставляю детальные технические чертежи и спецификации для производства одежды, обеспечивая высокое качество конечного продукта.',
        'testimonials': 'Отзывы клиентов',
        'news': 'Новости и Обновления',
        'top-works': 'Топ Работы',
        'success-story': 'История успеха',
        'clients': 'Мои Клиенты',
        'quotes': 'Цитаты и Вдохновение',
        'faq': 'Часто задаваемые вопросы',
        'future-plans': 'Планы на Будущее',
        'back-to-top': '⬆ Назад к началу',
        'consultation': 'Заказать консультацию',
        'toggle-theme': 'Тема',
        'modal-title': 'Модальное Окно',
        'modal-content': 'Это пример модального окна. Здесь вы можете разместить дополнительную информацию или интерактивные элементы.',
        'contact-name': 'Имя',
        'contact-name-placeholder': 'Ваше имя',
        'contact-email': 'Электронная почта',
        'contact-email-placeholder': 'Ваш email',
        'contact-message': 'Сообщение',
        'contact-message-placeholder': 'Ваше сообщение',
        'submit': 'Отправить',
        // Добавьте остальные переводы здесь
        'faq-question-1': 'Как заказать индивидуальный дизайн одежды?',
        'faq-answer-1': 'Вы можете связаться со мной через форму обратной связи в разделе "Контакты" или позвонить по указанному номеру телефона. Мы обсудим ваши требования и начнем работу над вашим проектом.',
        'faq-question-2': 'Сколько времени занимает разработка коллекции?',
        'faq-answer-2': 'Время разработки зависит от сложности проекта и ваших требований. В среднем, создание полной коллекции занимает от 3 до 6 месяцев.',
        'faq-question-3': 'Можно ли заказать прототипы перед производством?',
        'faq-answer-3': 'Да, конечно. Я предлагаю услугу создания прототипов, чтобы вы могли оценить дизайн и качество перед запуском массового производства.',
    },
        'en': {
        'home': 'Home',
        'about': 'About Me',
        'outfits': 'Outfits',
        'services': 'My Services',
        'testimonials': 'Testimonials',
        'news': 'News',
        'contact': 'Contact',
        'main-title': 'Vladislav Alexandrovich Kharchenko',
        'subtitle': 'Fashion Design and Creating Unique Looks',
        'cta': 'View Collection',
        'collection-description-1': 'Materials: - <br>Inspiration: Japan, Ku Klux Klan, cheap more costumes',
        'collection-description-2': 'Materials: coarse fabric, wool<br>Inspiration: Street fashion',
        'collection-description-3': 'Materials: synthetic<br>Inspiration: England',
'collection-description-4': 'Materials: synthetic<br>Inspiration: Workers in the USA',
        'share': 'Share',
       'service-title-1': 'Development of Unique Looks',
        'service-description-1': 'Creating individual looks that reflect your personality and style. From idea to implementation – a complete cycle of fashion design.',
        'service-title-2': 'Collection Design',
        'service-description-2': 'Developing comprehensive fashion collections that combine current trends with unique design solutions.',
        'service-title-3': 'Technical Drawing',
        'service-description-3': 'Providing detailed technical drawings and specifications for clothing production, ensuring high quality of the final product.',
        'testimonials': 'Client Testimonials',
        'news': 'News and Updates',
        'top-works': 'Top Works',
        'success-story': 'Success Story',
        'clients': 'My Clients',
        'quotes': 'Quotes and Inspiration',
        'faq': 'Frequently Asked Questions',
        'future-plans': 'Future Plans',
        'back-to-top': '⬆ Back to Top',
        'consultation': 'Order a Consultation',
        'toggle-theme': 'Theme',
        'modal-title': 'Modal Window',
        'modal-content': 'This is an example of a modal window. Here you can place additional information or interactive elements.',
        'contact-name': 'Name',
        'contact-name-placeholder': 'Your name',
        'contact-email': 'Email',
        'contact-email-placeholder': 'Your email',
        'contact-message': 'Message',
        'contact-message-placeholder': 'Your message',
        'submit': 'Submit',
        // Добавьте остальные переводы здесь
        'faq-question-1': 'How to order custom clothing design?',
        'faq-answer-1': 'You can contact me through the feedback form in the "Contact" section or call the provided phone number. We will discuss your requirements and start working on your project.',
        'faq-question-2': 'How long does it take to develop a collection?',
        'faq-answer-2': 'The development time depends on the complexity of the project and your requirements. On average, creating a full collection takes from 3 to 6 months.',
        'faq-question-3': 'Can I order prototypes before production?',
        'faq-answer-3': 'Yes, of course. I offer a prototype creation service so you can evaluate the design and quality before launching mass production.',
    }
};

// Функция для обновления текста на странице
function updateLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Обработчики событий для кнопок переключения языка
langRuButton.addEventListener('click', () => {
    langRuButton.classList.add('active');
    langEnButton.classList.remove('active');
    updateLanguage('ru');
    localStorage.setItem('language', 'ru');
});

langEnButton.addEventListener('click', () => {
    langEnButton.classList.add('active');
    langRuButton.classList.remove('active');
    updateLanguage('en');
    localStorage.setItem('language', 'en');
});

// Инициализация языка при загрузке страницы
const savedLanguage = localStorage.getItem('language') || 'ru';
updateLanguage(savedLanguage);
if (savedLanguage === 'ru') {
    langRuButton.classList.add('active');
    langEnButton.classList.remove('active');
} else {
    langEnButton.classList.add('active');
    langRuButton.classList.remove('active');
}

// ===============================
// Управление Боковым Меню (Гамбургер)
// ===============================

// Получаем элементы бокового меню и кнопок
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

// Открытие бокового меню при клике на гамбургер
hamburger.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

// Закрытие бокового меню при клике на кнопку закрытия
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

// Закрытие бокового меню при клике вне его области
window.addEventListener('click', (e) => {
    if (e.target === sideMenu) {
        sideMenu.classList.remove('open');
    }
});

// ===============================
// Переключение Тем (Темная/Светлая)
// ===============================

// Получаем кнопку переключения темы
const themeToggle = document.querySelector('.theme-toggle');

// Проверяем, есть ли сохраненная тема в localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(`${savedTheme}-theme`);

// Обновление кнопки темы в зависимости от текущей темы
function updateThemeButton() {
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = translations[savedLanguage]['toggle-theme'] || 'Тема';
    } else {
        themeToggle.textContent = translations[savedLanguage]['toggle-theme'] || 'Theme';
    }
}

updateThemeButton();

// Обработчик события для переключения темы
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeButton();
});

// ===============================
// Панель Прогресса Прокрутки
// ===============================

const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;

    // Показать кнопку "Назад к началу" после прокрутки на 300px
    if (scrollTop > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }

    // Добавить класс scrolled для некоторых эффектов
    if (scrollTop > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// ===============================
// Кнопка "Назад к началу" (Back to Top)
// ===============================

const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===============================
// Управление Модальными Окнами
// ===============================

// Получаем элементы модальных окон
const modals = document.querySelectorAll('.modal');

// Получаем кнопки для открытия модальных окон (например, кнопки "Заказать консультацию")
const openModalButtons = document.querySelectorAll('[data-modal-target]');

// Получаем кнопки закрытия модальных окон
const closeModalButtons = document.querySelectorAll('.close-modal');

// Функция для открытия модального окна
function openModal(modal) {
    if (modal == null) return;
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal(modal) {
    if (modal == null) return;
    modal.style.display = 'none';
}

// Добавляем обработчики событий для кнопок открытия модальных окон
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.getAttribute('data-modal-target'));
        openModal(modal);
    });
});

// Добавляем обработчики событий для кнопок закрытия модальных окон
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Закрытие модального окна при клике вне его содержимого
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

// ===============================
// IntersectionObserver для Анимаций Появления
// ===============================

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Остановить наблюдение после активации
        }
    });
}, observerOptions);

// Наблюдение за элементами с классом .card-animate
document.querySelectorAll('.card-animate').forEach(card => {
    observer.observe(card);
});

// ===============================
// Интерактивная Галерея с Кнопками "Поделиться"
// ===============================

// Функция для копирования ссылки и уведомления пользователя
function shareContent(event) {
    const button = event.currentTarget;
    const galleryItem = button.closest('.gallery-item, .top-work-item, .service-card, .testimonial-card, .news-card');
    const url = window.location.href.split('#')[0] + '#' + galleryItem.closest('section').id;
    
    navigator.clipboard.writeText(url).then(() => {
        alert('Ссылка скопирована в буфер обмена!');
    }).catch(err => {
        console.error('Не удалось скопировать текст: ', err);
    });
}

// Добавляем обработчики событий для кнопок "Поделиться"
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', shareContent);
});

// ===============================
// FAQ Интерактивные Элементы
// ===============================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Закрыть все открытые FAQ
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Переключить текущий FAQ
        item.classList.toggle('active');
    });
});

// ===============================
// Форма Обратной Связи и Отзывов
// ===============================

// Получаем формы
const contactForm = document.querySelector('.contact-form');
const testimonialForm = document.querySelector('.testimonial-form'); // Если есть форма для отзывов

// Обработчик отправки формы обратной связи
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Получаем данные формы
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Отправка данных на сервер (пример с fetch)
    fetch('https://yourserver.com/api/contact', { // Замените URL на ваш сервер
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Ваше сообщение успешно отправлено!');
            contactForm.reset();
        } else {
            alert('Произошла ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения.');
    });
});

// Аналогично можно добавить обработчик для формы отзывов

// ===============================
// Кнопка "Переходить к модальным окнам" и другие интерактивные элементы
// ===============================

// Пример для кнопки "Заказать консультацию" открывающей модальное окно
const consultationButtons = document.querySelectorAll('[data-modal-target="#myModal"]');
consultationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.getAttribute('data-modal-target'));
        openModal(modal);
    });
});

// ===============================
// Кнопка "Поделиться" в социальных сетях (Дополнительный Функционал)
// ===============================

// Если вы хотите интегрировать реальные кнопки "Поделиться" для социальных сетей, можно использовать API соответствующих платформ или воспользоваться готовыми решениями.
// Для простоты, ниже представлен пример открытия окна для поделиться ссылкой на Facebook:

function shareOnFacebook(event) {
    const button = event.currentTarget;
    const galleryItem = button.closest('.gallery-item, .top-work-item, .service-card, .testimonial-card, .news-card');
    const url = window.location.href.split('#')[0] + '#' + galleryItem.closest('section').id;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    
    window.open(facebookShareUrl, '_blank', 'width=600,height=400');
}

// Пример добавления обработчика для кнопок с классом .share-facebook
document.querySelectorAll('.share-facebook').forEach(button => {
    button.addEventListener('click', shareOnFacebook);
});

// Аналогично можно добавить кнопки для других социальных сетей

// ===============================
// Переключение Тем с Плавными Переходами
// ===============================

// Для плавных переходов между темами можно добавить CSS-переходы, что уже учтено в CSS

// ===============================
// Инициализация
// ===============================

// Обновление кнопок темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateThemeButton();
});

// ===============================
// Дополнительные Функции (По Необходимости)
// ===============================

// Функция для инициализации Google Maps или другой карты
function initMap() {
    // Пример инициализации Google Maps
    // Убедитесь, что у вас есть API ключ и правильно подключен скрипт Google Maps
    /*
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 55.7558, lng: 37.6173 }, // Пример: Москва
        zoom: 12,
    });
    */
}

// Инициализация карты после загрузки скрипта
// window.onload = initMap;

// ===============================
// Завершение
// ===============================

/*
    Добавьте дополнительные функции и обработчики событий ниже по мере необходимости.
    Убедитесь, что все интерактивные элементы имеют соответствующие атрибуты и классы в HTML.
*/

