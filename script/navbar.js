export default function navBar() {
    const menu = document.querySelector('.menu-mobile');
    const menuList = document.querySelector('#menu-mobile');
    const quemSomos = document.querySelector('.li3-mobile');
    const introducao = document.querySelector('.li1-mobile');

    const showMenu = () => {
        menuList.classList.toggle('show');
    }

    menu.addEventListener('click', showMenu);

    const notMenu = () => {
        menuList.classList.remove('show');
        introducao.classList.remove('show');
    }

    quemSomos.addEventListener('click', notMenu);
    introducao.addEventListener('click',notMenu);
}