export default function navBar() {
    const menu = document.querySelector('.menu-mobile');
    
    

    const showMenu = () => {
        const menuList = document.querySelector('#menu-mobile');
        menuList.classList.toggle('show');
    }

    menu.addEventListener('click' , showMenu);
}