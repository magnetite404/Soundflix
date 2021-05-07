// função para calcular o tamanho dos 4% das minhas laterais so site para pixels, já q stagePadding apenas aceita pixels
function tamanhoDiv(){
    var pxDiv = document.getElementsByTagName('body')[0].offsetWidth; //tamanho da tela
    var pixels = (pxDiv * 4) / 100;
    return pixels;
};


// carrossel para section "Continuar ouvindo"
$('#ouvindo').owlCarousel({
    loop: false,
    margin:10,
    nav:false,
    navText: ["<-  Anterior", "Próximo  ->"],
    dots: false,
    stagePadding: tamanhoDiv(),
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

$(".ouvindo .anterior").on('click', function(){
    $('#ouvindo').trigger('prev.owl.carousel');
});
$(".ouvindo .proximo").on('click', function(){
    $('#ouvindo').trigger('next.owl.carousel');
})


// carrossel para section "Destaques da semana"
 $('#destaques').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    autoplayHoverPause: true,
    slideBy: 3,
    slideTransition: 'ease-in-out',
});

$("#anterior").on('click', function(){
    $('#destaques').trigger('prev.owl.carousel');
});
$("#proximo").on('click', function(){
    $('#destaques').trigger('next.owl.carousel');
});

    
// carrossel para as demais sections
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});