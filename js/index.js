// Your code goes here
// const ctaButton = document.querySelector('button');
// ctaButton.append(siteContent.cta['button']);
// ctaButton.addEventListener('click', (event) => { h1Text.textContent = "But Jeff is awesomer"; });


const allImages = document.querySelectorAll('img');
console.log(allImages);
allImages.forEach(image=>{
    image.addEventListener('mouseover', () => {
        image.style.transform = "scale(1.1)";
        image.style.transition="all .3s";
    });
});

allImages.forEach(image => {
    image.addEventListener('mouseleave', () => {
        image.style.transform = "scale(1)";
        image.style.transition = "all .3s";
    });
});

allImages.forEach(image => {
    image.addEventListener('click', () => {
        image.style.filter = "grayscale(100%)";
        image.style.transition = "all .3s";
    });
});

allImages.forEach(image => {
    image.addEventListener('dblclick', () => {
        image.style.filter = "saturate(100%)";
        image.style.transition = "all .3s";
    });
});

const navBar = document.querySelector('.main-navigation');
console.log(navBar);
window.addEventListener('wheel', () => {
    navBar.style.transform = "translateY(-100px)";
    navBar.style.transition =  "all .3s";
    console.log("scroll");

});

const allText = document.querySelectorAll('p');
const allH2 = document.querySelectorAll('h2');
window.addEventListener('keydown', () => {
    allText.forEach(text=>{
        text.style.color = "white"});
    allH2.forEach(heading=>{heading.style.color="white";});
    document.body.style.backgroundColor="black";
});

const stopLink = document.querySelectorAll('.nav-link');
stopLink.forEach(link=>{link.addEventListener('click', (event) => {
    console.log('menu item click');
    event.preventDefault();
})});

allText.forEach(text => {
    text.addEventListener('dragstart', ()=>{
    text.style.transform ="rotate(180deg)";
    })
});

allText.forEach(text => {
    text.addEventListener('dragend', () => {
        text.style.transform = "rotate(0deg)";
    })
});

const footerArea = document.querySelector('footer');
window.addEventListener('resize', ()=>{
    footerArea.style.backgroundColor="blue";
});

window.addEventListener('copy', () => {
    alert("Don't steal our content!");
});


// var vscroll = document.body.scrollTop;
// console.log(vscroll);
// if (vscroll == 0) {
//     navBar.style.transform = "translateY(100px)";
// }


// TweenMax.to(".logo-heading", 1, { x: 100 });