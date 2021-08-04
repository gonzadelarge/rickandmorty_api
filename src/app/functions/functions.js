export function upButton() {
    const button = document.getElementById('btn-up');
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}

export function menuButton() {
    
    const button = document.getElementById('btnMenu');
    const header = document.getElementById('header');
    button.addEventListener('click', () => {
        header.classList.toggle('b-header__active');
    })
}

export function menuScroll() {
    let position = window.scrollY + document.getElementById('container_info').getBoundingClientRect().top;
    window.scrollTo(0, position);
}