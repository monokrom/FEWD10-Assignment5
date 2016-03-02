$(document).ready(function (){

$('.hamburger').click(function(){
   $(this).next().fadeToggle(300, "swing");
});

});