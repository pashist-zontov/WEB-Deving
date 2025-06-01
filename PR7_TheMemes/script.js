document.addEventListener('DOMContentLoaded', function() {
    // Переключение вкладок
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Открытие модального окна для мемов
    const modal = document.querySelector('.modal');
    const expandedImg = document.getElementById('expandedImg');
    const imgInfo = document.getElementById('imgInfo');
    const closeBtn = document.querySelector('.close-btn');
    
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const galleryItem = this.closest('.gallery-item');
            const title = galleryItem.querySelector('.img-title').textContent;
            const description = galleryItem.querySelector('.img-descr').textContent;
            
            expandedImg.src = this.src;
            expandedImg.alt = this.alt;
            
            imgInfo.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
            `;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Форма добавления мема
    const memeForm = document.getElementById('meme-form');
    const notif = document.getElementById('notif');
    
    memeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        notif.classList.add('show');
        
        setTimeout(() => {
            notif.classList.remove('show');
        }, 3000);
        
        memeForm.reset();
    });

    // Поисковик
    const searchInputs = document.querySelectorAll('.search-box input');
        searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const activeTab = document.querySelector('.tab-content.active');
            const searchTerm = this.value.toLowerCase();
            const galleryItems = activeTab.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                const title = item.querySelector('.img-title').textContent.toLowerCase();
                const description = item.querySelector('.img-descr').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            const tabContent = document.getElementById(tabId);
            const searchInput = tabContent.querySelector('.search-box input');
            
            if (searchInput) {
                searchInput.value = '';
                const galleryItems = tabContent.querySelectorAll('.gallery-item');
                galleryItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    });
});