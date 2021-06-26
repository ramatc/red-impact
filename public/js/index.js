window.onload = function() {
    //menu desplegable mobile
    let burguerMenu = document.querySelector("#contenedor-menu");
    let menuOpen = document.querySelector("#menu-open");
    let linkDesplegable = document.querySelector("#link-desplegable");
    let menuClose = document.querySelector("#menu-close");

    burguerMenu.addEventListener("click", function() {
        menuOpen.style.display = "block";
        menuOpen.style.animation = "aperturaMenu 1s 1" //agregamos la animacion de css que despliega el menú

    });
    menuClose.addEventListener("click", function() {
        menuOpen.style.animation = "cierreMenu 1s 1" //agregamos la animacio de css que cierra el menu
        function cierre() {
            return menuOpen.style.display = "none"
        }
        setTimeout(cierre, 1000) //con set timeout retrasamos el diplay none, ejecuta la funcion luego del tiempo establecido

    })
    linkDesplegable.addEventListener("click", function() {
        menuOpen.style.display = "none"
    })

     //carousel
    const carousel = document.querySelector(".carousel");
    
    if(carousel){
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const dot1 = document.querySelector("#dot1");
        const dot2 = document.querySelector("#dot2");
        const dot3 = document.querySelector("#dot3");
    
        var slideIndex = 1;
        showSlides(slideIndex);
    
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
    
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
    
        function avanzar() {
            return plusSlides(1)
        }
    
        prevBtn.addEventListener("click", function() {
            plusSlides(-1)
        })
    
        nextBtn.addEventListener("click", function() {
            plusSlides(1)
        })
    
        dot1.addEventListener("click", function() {
            currentSlide(1)
        })
    
        dot2.addEventListener("click", function() {
            currentSlide(2)
        })
    
        dot3.addEventListener("click", function() {
            currentSlide(3)
        })
    
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
    
        }
        setInterval(avanzar, 4000) //Cambia la imagen cada 4 segundos
    }
}