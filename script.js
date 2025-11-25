/*
Inspired by AR Shakir
Wigs - Ecommerce Website UI:
https://dribbble.com/shots/15438373-Wigs-Ecommerce-Website-UI
*/

$(document).ready(function(){
    $( ".menu-toggle" ).click(function() {
        $('.menu ul').toggleClass('open');
    });
    $( ".search-toggle" ).click(function() {
        $('.search-bar').toggleClass('open');
    });
    $( ".search-close" ).click(function() {
        $('.search-bar').toggleClass('open');
    });
});