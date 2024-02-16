function showMenuList () {
    const menuList = document.querySelector(".header-navbar");
    const burgerIcon = document.querySelector(".menuIcon");

    burgerIcon.classList.toggle("fa-x");
    burgerIcon.classList.toggle("fa-bars");
    menuList.classList.toggle('show');
}