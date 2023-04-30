export default function navBar() {
    const menu = document.querySelector('.menu-mobile');
    const menuList = document.querySelector('#menu-mobile');
    const quemSomos = document.querySelector('.li3-mobile');

    const showMenu = () => {
        menuList.classList.toggle('show');
    }

    menu.addEventListener('click', showMenu);

    const notMenu = () => {
        menuList.classList.remove('show');
        console.log('ola')
    }

    quemSomos.addEventListener('click', notMenu);
}