$(document).ready(function(){
    $('.profile').on('click', function(){
        $('.detail').addClass('active');
    });

    $('.close').on('click',function(){
        $('.detail').removeClass('active');
    })
})