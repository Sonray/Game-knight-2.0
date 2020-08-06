$(document).ready(function() {

    $(".pg1").click(function() {
        $(".shown-text1").fadeToggle().fast;
        $(".hidden-text1").slideToggle().fast;
    });

    $(".pg2").click(function() {
        $(".shown-text2").fadeToggle().fast;
        $(".hidden-text2").slideToggle().fast;
    });

    $(".pg3").click(function() {
        $(".shown-text3").fadeToggle().fast;
        $(".hidden-text3").slideToggle().fast;
    });

    $(".pg4").click(function() {
        $(".shown-text4").fadeToggle().fast;
        $(".hidden-text4").slideToggle().fast;
    }); 
}); 