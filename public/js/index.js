window.onload = function() {                
    //Menu desplegable mobile
    //Al abrir el menu, su width pasa a 60%
    let openNav = document.querySelector("#openNav");
    openNav.addEventListener("click", function(){
        document.getElementById("mySidenav").style.width = "70%";
    })

    //Al cerrar el menu, su width pasa a 0px
    let closeNav = document.querySelector("#closeNav");
    closeNav.addEventListener("click", function(){
        document.getElementById("mySidenav").style.width = "0";
    })

    //Carousel
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

    //Zoom imagen product detail
    let mainProductImage = document.querySelector("#mainProductImage")
    let containerZoom = document.querySelector(".container-zoom")
    let closeZoom = document.querySelector(".close-zoom")

    if(mainProductImage){
        mainProductImage.addEventListener("click",function(){
                containerZoom.style.display = "flex"
            closeZoom.addEventListener("click",function(){
                containerZoom.style.display = "none"
            })
        })
    }

    //Dropdown para mostrar la la lista de productos
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
          this.classList.toggle("activeDropdown");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
    }
    
    //Toggle que va cambiando la flecha hacia arriba o hacia abajo al hacer click
    let toggleBtn = document.getElementsByClassName("toggle-btn");
    for (i = 0; i < toggleBtn.length; i++) {
        toggleBtn[i].addEventListener("click", function(){
            this.querySelector("i").classList.toggle("fa-caret-up");
        })        
    }

    //Redireccion al hacer click
    let btnProducts = document.querySelector(".btnProducts");
    let btnIndumentaria = document.querySelector(".btnIndumentaria");
    let btnCalzado = document.querySelector(".btnCalzado");
    let btnAccesorios = document.querySelector(".btnAccesorios");
    let btnBolsos = document.querySelector(".btnBolsos");
    let btnUniformes = document.querySelector(".btnUniformes");
    let btnAtributos = document.querySelector(".btnAtributos");

    btnProducts.addEventListener("click", function(){
        location.href ='/productos';
    })
    btnIndumentaria.addEventListener("click", function(){
        location.href ='/indumentaria';
    })
    btnCalzado.addEventListener("click", function(){
        location.href ='/calzado';
    })
    btnAccesorios.addEventListener("click", function(){
        location.href ='/accesorios';
    })
    btnBolsos.addEventListener("click", function(){
        location.href ='/bolsos-y-mochilas';
    })
    btnUniformes.addEventListener("click", function(){
        location.href ='/uniformes';
    })
    btnAtributos.addEventListener("click", function(){
        location.href ='/atributos-militares';
    })

}