// FOR RESPONSIVENESS
burger = document.querySelector('.burger')

navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.leftnav')

// x.classList.toggle(y) means for a section having class"x" if "given class in bracket i.e. y" is applied it will be unapplied on clicking and vice-versa.
burger.addEventListener('click',()=>{
    navbar.classList.toggle('dec-height-resp')
    leftnav.classList.toggle('hide-this-resp')
})

//FOR NEWS SECTION IMAGE CAROUSEL
var idx = 0;
carousal();
function carousal(){
    var x = document.getElementsByClassName('news_img_text');
    for(var i=0; i<x.length; i++)
        x[i].style.display = "none";

    if(idx > x.length-1)
        idx = 0;

    x[idx].style.display = "block";
    idx++;
    setTimeout(carousal, 3000);
}

