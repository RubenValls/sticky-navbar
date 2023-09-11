const banner = document.querySelector('#hero-banner');
const nav = document.querySelector('#nav');

window.addEventListener("scroll", (e) => {
    if(banner.getBoundingClientRect().y < -100){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
});