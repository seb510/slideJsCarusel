let slideIndex = 1;
showSlides(slideIndex);

function pluSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let act = document.getElementsByClassName("active");

if (n > slides.length){
    slideIndex = 1
} 

if (n < 1){
    slideIndex= slides.length
}

for (i=0; i < slides.length; i++){
    slides[i].style.display = 'none';
}

for ( let i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "");
}


slides[slideIndex -1].style.display = 'block';
dots[slideIndex -1].style.display = 'active';
}