var burger = document.querySelector('#burger');
var wrap_link = document.querySelector('.wrap_link');

window.addEventListener('load',()=>{
    let x = window.innerWidth;
    if(x<=950){
        burger.style.display = 'inline-block';
        wrap_link.style.display = 'none';
    }
    else{
        burger.style.display = 'none';
        wrap_link.style.display = 'flex';
    }
});

window.addEventListener('resize',()=>{
    let x = window.innerWidth;
    if(x<=950){
        burger.style.opacity = '1';
        burger.style.display = 'inline-block';
        wrap_link.style.display = 'none';
    }
    else{
        burger.style.opacity = '0';
        burger.style.display = 'none';
        wrap_link.style.display = 'flex';
    }
});

burger.addEventListener('click',()=>{
    if(wrap_link.style.display == 'none'){
        wrap_link.style.display = 'flex';
        wrap_link.style.transition = '1s ease-in-out';
    }
    else{
        if(wrap_link.style.display == 'flex'){
            wrap_link.style.display = 'none';
            wrap_link.style.transition = '1s ease-in-out';
        }
    }
});