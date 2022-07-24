
let navBar =  document.querySelector('.navbar');
let menuBar = document.querySelector('#menu-bar');

window.onscroll = () =>{
    navBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
}

menuBar.addEventListener('click' , () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})




document.querySelectorAll('.about .box-container .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .box-container .video-container .video').src = src;
    }
})






let themeToggler = document.querySelector('.theme-toggler');
document.querySelector('.toggle-btn').onclick = () =>{
    themeToggler.classList.toggle('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
    btn.onclick = () =>{
      let color = btn.style.background;
      document.querySelector(':root').style.setProperty('--min-color', color);
    }
  });