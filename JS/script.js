function showSlides() {
    let i;
    let slides = document.getElementsByClassName("name");
    let dots = document.getElementsByClassName("email");
    let textBox = document.getElementsByClassName("message");
    
    for (i = 0; i < slides.lenght; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    setTimeout(showSlides, 3000);
}

showHiddenPass('submit','hero')