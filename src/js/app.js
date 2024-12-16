new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    }
});

document.querySelector(".navigation__burger").addEventListener("click", function() {
    this.classList.toggle('active');
    document.querySelector('.navigation__list').classList.toggle('open');
})