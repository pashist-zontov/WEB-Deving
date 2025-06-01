const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')


// Переключатель вкладок
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        tabBtns.tabContents.forEach(content => content.classList.remove('active'));

        const tabData = btn.getAttribute('data-tab');
        document.getElementById(tabData).classList.add('active');
    });
});


// Модальное окно
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('modal');
const expandedImg = document.getElementById('expandedImg');
const imgInfo = document.getElementById('imgInfo');
const closeBtn = document.querySelector('.close-btn');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSRC = item.querySelector('img').src;
        const imgALT = item.querySelector('img').alt;

        expandedImg.src = imgSRC;
        expandedImg.alt = imgALT;
        imgInfo.textContent = imgALT // !!!

        modal.style.display = 'flex';
    });
});

// Закрытие
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

// Поисковик

const searchInputs = document.querySelectorAll('.search-box input');
    
searchInputs.forEach(input => {
    input.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const gallery = this.closest('.tab-content').querySelector('.gallery');
        const items = gallery.querySelectorAll('.gallery-item');
            
        items.forEach(item => {
            const title = item.querySelector('.image-title').textContent.toLowerCase();
            item.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    });
});


const memeForm = document.getElementById('meme-form');
const notif = document.getElementById('notif');

if (memeForm) {
    memeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Пока без сервера

        notif.classList.remove("show");

        setTimeout(() => {
            notif.classList.remove('show');
        }, 3000);
    });
}