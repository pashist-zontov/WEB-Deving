document.addEventListener('DOMContentLoaded', function() {
    // Открытие окна
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', function() {
            const brand = this.dataset.brand;
            const modal = document.getElementById(`${brand}-modal`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие окна
    const closeBtns = document.querySelectorAll('.close-modal');
    closeBtns.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

});