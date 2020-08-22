$(document).ready(function(){

    $('.accordion-item').click(function(){
        if($(this).hasClass('open')){//sprawdzamy czy obiekt zawiera klasę open

            $(this).removeClass('open');//usówa klasę open
            $(this).find('.accordion-content').slideUp();//zwija tylko tą klasę którą znalazł po kliknięciu
                
        }else{

            $(this).addClass('open');//tworzy klasę open
            $(this).find('.accordion-content').slideDown(); //rozwija tylko tą klasę którą znalazł poprzez kliknięcie
        }      


    });
});

    // $('.accordion-content').slideDown(); --> rozwija wszystkie klasy po kliknieciu

    // console.log($('.accordion-item'));
