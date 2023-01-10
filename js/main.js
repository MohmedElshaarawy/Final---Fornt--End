let humburger = document.querySelector('.humburger');
let sideNav = document.querySelector('.sideNav');
let closeNav = document.querySelector('.sideNav i');
let icon =document.querySelector('.icon');
let gear = document.querySelector('.icon i');
let setting = document.querySelector('.setting');
let colorOption = document.querySelectorAll('.colorOption span');
let root =document.querySelector(':root');
let off =document.getElementById('off')
let on =document.getElementById('on')
let header =document.querySelector('header');
let reset =document.getElementById('reset')


humburger.onclick = ()=>{
    sideNav.style.right ='0';
    closeNav.style.right ='170px'
    closeNav.onclick = ()=>{
        sideNav.style.right ='-150px';
    closeNav.style.right ='-170px'
    }
}
// 
icon.onclick = ()=>{
    setting.classList.toggle('hide');
    gear.classList.toggle('fa-spin')
}

for(var i=0;i<colorOption.length;i++){
    colorOption[0].addEventListener('click' ,()=>{
        root.style.setProperty('--main-color','#ee9002')
        colorOption[0].style.opacity = '1'
        colorOption[1].style.opacity = '.5'
        colorOption[2].style.opacity = '.5'
        colorOption[3].style.opacity = '.5'

    })
    colorOption[1].addEventListener('click' ,()=>{
        root.style.setProperty('--main-color','#75aefc')
        colorOption[1].style.opacity = '1'
        colorOption[0].style.opacity = '.5'
        colorOption[2].style.opacity = '.5'
        colorOption[3].style.opacity = '.5'

    })
    colorOption[2].addEventListener('click' ,()=>{
        root.style.setProperty('--main-color','#f32727')
        colorOption[2].style.opacity = '1'
        colorOption[0].style.opacity = '.5'
        colorOption[1].style.opacity = '.5'
        colorOption[3].style.opacity = '.5'

    })
    colorOption[3].addEventListener('click' ,()=>{
        root.style.setProperty('--main-color','#8600ff')
        colorOption[3].style.opacity = '1'
        colorOption[0].style.opacity = '.5'
        colorOption[2].style.opacity = '.5'
        colorOption[3].style.opacity = '.5'

    })
}
// Background Random 
let x;
let images =['bg1.webp','bg2.webp','bg3.webp','bg4.webp','bg5.jpg'];

on.onclick = ()=>{
  x = setInterval(function (){
    header.style.background = "linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) , url(./images2/" + images[Math.floor(Math.random() * images.length)] + ") no-repeat fixed center";
    header.style.backgroundSize = 'cover';

  },5000)

}
off.onclick = ()=>{
    setTimeout(x,100)
    clearTimeout(x)

}
 
// Reset Button
reset.onclick = ()=>{
    window.location.reload();
}



// check if there's local storage  color option


let mainColors = localStorage.getItem("color");

    if(mainColors !== null) {
        document.documentElement.style.setProperty('--main-color' , localStorage.getItem("red"));
        
    } 

// // switch colors


    const colors = document.querySelectorAll("--main-color");
    // loop on all span items 


    colors.forEach(span =>{
        // click  on Every span items


        span.addEventListener("click" , (e) => {
            // set color  on Root
            document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);
                     
            // set color  on local storage

            localStorage.setItem("color" ,e.target.dataset.color );
        });
    });



