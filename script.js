const servicesData = [
    {
        id: 1,
        title: "ВНЖ по работе",
        category: "vnzh",
        price: "440 zl",
        basis: "Наличие трудового договора",
        time: "12 месяцев",
        image: "images/01-vnzh-rabota.png"
    },
    {
        id: 2,
        title: "ВНЖ по бизнесу",
        category: "vnzh",
        price: "340 zl",
        basis: "Наличие бизнеса в Польше",
        time: "12 месяцев",
        image: "images/02-vnzh-biznes.png"
    },
    {
        id: 3,
        title: "ВНЖ по воссоединению семьи",
        category: "vnzh",
        price: "340 zl",
        basis: "Вы состоите в браке либо являетесь членом семьи с членом, имеющим ВНЖ/ПМЖ/Гражданством Польши",
        time: "12 месяцев",
        image: "images/03-vnzh-semya.png"
    },
    {
        id: 4,
        title: "ПМЖ (карта резидента)",
        category: "pmzh",
        price: "640 zl",
        basis: "Легальное пребывание на территории Польши более 5 лет",
        time: "18 месяцев",
        image: "images/04-karta-rezidenta.png"
    },
    {
        id: 5,
        title: "ПМЖ по польскому происхождению",
        category: "pmzh",
        price: "640 zl",
        basis: "Документальное подтверждение польского происхождения",
        time: "18 месяцев",
        image: "images/05-pmzh-proishozhdenie.png"
    },
    {
        id: 6,
        title: "ПМЖ по браку с гражданином Польши",
        category: "pmzh",
        price: "640 zl",
        basis: "3 года брака + 2 года пребывания по ВНЖ на основании по воссоединению семьи с гражданином Польши",
        time: "18 месяцев",
        image: "images/06-pmzh-brak.png"
    },
    {
        id: 7,
        title: "Гражданство через признание",
        category: "grazhdanstvo",
        price: "1000 zl",
        basis: "Легальное пребывание на территории Польши более 3 лет на основании ПМЖ",
        time: "24 месяца",
        image: "images/07-grazhdanstvo-priznanie.png"
    },
    {
        id: 8,
        title: "Гражданство через решение президента",
        category: "grazhdanstvo",
        price: "1669 zl",
        basis: "Личное прошение на имя президента республики Польши",
        time: "24 месяца",
        image: "images/08-grazhdanstvo-prezident.png"
    }
];
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;

function savedThemeCheck() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        bodyElement.setAttribute('data-theme', 'dark');
    }
}
savedThemeCheck();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = bodyElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            bodyElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            bodyElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}
function renderCards(cardsArray) {
    const container = document.getElementById('catalog-container');
    if (!container) return;
    container.innerHTML = "";
    cardsArray.forEach(service => {
        const cardHTML = `
            <article class="service-card" data-category="${service.category}" data-id="${service.id}">
                <img src="${service.image}" alt="${service.title}" class="card-img">
                <h3>${service.title}</h3>
                <ul class="service-parameters">
                    <li><strong>Государственная пошлина:</strong> ${service.price}</li>
                    <li><strong>Основание:</strong> ${service.basis}</li>
                    <li><strong>Срок рассмотрения:</strong> ${service.time}</li>
                </ul>
                <button class="card-btn">Подробнее</button>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    renderCards(servicesData);
});