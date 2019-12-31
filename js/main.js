var menuButton = document.querySelector('.menu-button');
var navigationMenu = document.querySelector('.site-navigation')
var open = false;
menuButton.addEventListener('click', function(e){
    e.stopPropagation();
    if(open){
        menuButton.classList.remove('x');
        navigationMenu.classList.remove('open');
        open = false;
        return;
    }
    menuButton.classList.add('x');
    navigationMenu.classList.add('open');
    open = true;
    console.log(menuButton, navigationMenu);
    return;
});

document.body.addEventListener('click', function(){
    if(open){
        menuButton.classList.remove('x');
        navigationMenu.classList.remove('open');
        open = false;
        return;
    }
})