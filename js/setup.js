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
    dots: false,
    stagePadding: tamanhoDiv(),
    responsive:{
        0:{
            items:2,
            margin:5,
        },
        375:{
            items:3,
            margin: 5,
        },
        600:{
            items:4
        },
        768:{
            items:5
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
            items:2,
            margin:5,
        },
        375:{
            items:2,
            margin:5,
        },
        600:{
            items:3
        },
        768:{
            items:4
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


// carrossel para section "Séries"
$('#series').owlCarousel({
    loop: true,
    margin:10,
    nav:false,
    dots: false,
    stagePadding: tamanhoDiv(),
    slideBy:3,
    responsive:{
        0:{
            items:2,
            margin:5,
        },
        375:{
            items:3,
            margin: 5,
        },
        600:{
            items:4
        },
        768:{
            items:5
        },
        1000:{
            items:6
        }
    }
});

$(".series .anterior").on('click', function(){
    $('#series').trigger('prev.owl.carousel');
});
$(".series .proximo").on('click', function(){
    $('#series').trigger('next.owl.carousel');
})


// carrossel para section "Filmes"
$('#filmes').owlCarousel({
    loop: true,
    margin:10,
    nav:false,
    dots: false,
    stagePadding: tamanhoDiv(),
    slideBy:3,
    responsive:{
        0:{
            items:2,
            margin:5,
        },
        375:{
            items:3,
            margin: 5,
        },
        600:{
            items:4
        },
        768:{
            items:5
        },
        1000:{
            items:6
        }
    }
});

$(".filmes .anterior").on('click', function(){
    $('#filmes').trigger('prev.owl.carousel');
});
$(".filmes .proximo").on('click', function(){
    $('#filmes').trigger('next.owl.carousel');
})   


// carrossel para section "Animes"
$('#animes').owlCarousel({
    loop: true,
    margin:10,
    nav:false,
    dots: false,
    stagePadding: tamanhoDiv(),
    slideBy:3,
    responsive:{
        0:{
            items:2,
            margin:5,
        },
        375:{
            items:3,
            margin:5,
        },
        600:{
            items:4
        },
        768:{
            items:5
        },
        1000:{
            items:6
        }
    }
});

$(".animes .anterior").on('click', function(){
    $('#animes').trigger('prev.owl.carousel');
});
$(".animes .proximo").on('click', function(){
    $('#animes').trigger('next.owl.carousel');
})


// carrossel para section "Jogos"
$('#jogos').owlCarousel({
    loop: true,
    margin:10,
    nav:false,
    dots: false,
    stagePadding: tamanhoDiv(),
    slideBy:3,
    responsive:{
        0:{
            items:2,
            margin:5,
        },
        375:{
            items:3,
            margin: 5,
        },
        600:{
            items:4
        },
        768:{
            items:5
        },
        1000:{
            items:6
        }
    }
});

$(".jogos .anterior").on('click', function(){
    $('#jogos').trigger('prev.owl.carousel');
});
$(".jogos .proximo").on('click', function(){
    $('#jogos').trigger('next.owl.carousel');
})



/*
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
*/