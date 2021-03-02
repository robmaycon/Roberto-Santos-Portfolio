const menuItems = document.querySelectorAll('.menu-item a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToOnClick);
});

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};

function scrollToOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
    
    
    
};

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    });
};
