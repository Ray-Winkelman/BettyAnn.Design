/**
 * Created by ray on 25/04/15.
 */

$(document).ready(function() {

    $(document).scroll(function() {
        
        var screen = $(window);

        if (screen.width() > 767) {
            $('h2:in-viewport').addClass('animated zoomIn');
            $("h2:below-the-fold").removeClass('animated zoomIn');
            $("h2:above-the-top").removeClass('animated zoomIn');

            $('p:in-viewport').addClass('animated fadeIn')
            $("p:below-the-fold").removeClass('animated fadeIn')
            $("p:above-the-top").removeClass('animated fadeIn')

            $('img:in-viewport').addClass('animated fadeIn')
            $("img:below-the-fold").removeClass('animated fadeIn')
            $("img:above-the-top").removeClass('animated fadeIn')

            $('iframe:in-viewport').addClass('animated fadeIn')
            $("iframe:below-the-fold").removeClass('animated fadeIn')
            $("iframe:above-the-top").removeClass('animated fadeIn')
        }
    });
});

var images = [

    ['img/slideshow/LakehouseA1.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA2.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA3.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA4.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA5.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA6.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA7.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA8.jpg', 'Lakehouse Project: After'],
    ['img/slideshow/LakehouseA9.jpg', 'Lakehouse Project: After'],

    ['img/slideshow/Welcome_Ctre_before_01.jpg', 'Welcome Center: Before'],
    ['img/slideshow/Welcome_Ctre_after_01.jpg', 'Welcome Center: After'],
    ['img/slideshow/Welcome_Ctre_before_02.jpg', 'Welcome Center: Before'],
    ['img/slideshow/Welcome_Ctre_after_02.jpg', 'Welcome Center: After'],
    ['img/slideshow/Welcome_Ctre_before_03.jpg', 'Welcome Center: Before'],
    ['img/slideshow/Welcome_Ctre_after_03.jpg', 'Welcome Center: After'],

    ['img/slideshow/RJb1.jpg', 'Reid Jewellers: Before'],
    ['img/slideshow/RJa1.jpg', 'Reid Jewellers: After'],
    ['img/slideshow/RJb2.jpg', 'Reid Jewellers: Before'],
    ['img/slideshow/RJa2.jpg', 'Reid Jewellers: After'],
    ['img/slideshow/RJb3.jpg', 'Reid Jewellers: Before'],
    ['img/slideshow/RJa3.jpg', 'Reid Jewellers: After'],
    ['img/slideshow/RJb4.jpg', 'Reid Jewellers: Before'],
    ['img/slideshow/RJa4.jpg', 'Reid Jewellers: After'],
    ['img/slideshow/RJb5.jpg', 'Reid Jewellers: Before'],

    ['img/slideshow/Serenity_before_01.jpg', 'Serenity Funeral Home: Before'],
    ['img/slideshow/Serenity_after_01.jpg', 'Serenity Funeral Home: After'],
    ['img/slideshow/Serenity_before_02.jpg', 'Serenity Funeral Home: Before'],
    ['img/slideshow/Serenity_after_02.jpg', 'Serenity Funeral Home: After'],
    ['img/slideshow/Serenity_before_03.jpg', 'Serenity Funeral Home: Before'],
    ['img/slideshow/Serenity_after_03.jpg', 'Serenity Funeral Home: After'],
    ['img/slideshow/Serenity_before_04.jpg', 'Serenity Funeral Home: Before'],
    ['img/slideshow/Serenity_after_04.jpg', 'Serenity Funeral Home: After'],

    //['img/slideshow/CU3B.jpg', 'Residential: Before'],
    //['img/slideshow/ResB1.jpg', 'Residential: Before'],

    ['img/slideshow/ResB2.jpg', 'Residential: Before'],
    ['img/slideshow/ResA2.jpg', 'Residential: After'],
    ['img/slideshow/ResA002.jpg', 'Residential: After'],
    ['img/slideshow/CU3P.jpg', 'Residential: After'],
    ['img/slideshow/ResA001.jpg', 'Residential: After'],
    ['img/slideshow/ResA1.jpg', 'Residential: After']

];

var i = 0;

$( document ).ready(function() {
    $(new Image()).attr('src', '' + images[i][0]).appendTo($('#slide-container')).fadeIn();
    $('#slide-container').append( "<p>" + (i + 1) + "/" + images.length + " - " + images[i][1] + "</p>" );
});

function Prev() {
    $('#slide-container').empty();

    i--;
    Correct();

    $(new Image()).attr('src', '' + images[i][0]).appendTo($('#slide-container')).fadeIn();
    $('#slide-container').append( "<p>" + (i + 1) + "/" + images.length + " - " + images[i][1] + "</p>");
}

function Next() {
    $('#slide-container').empty();

    i++;
    Correct();

    $(new Image()).attr('src', '' + images[i][0]).appendTo($('#slide-container')).fadeIn();
    $('#slide-container').append( "<p>" + (i + 1) + "/" + images.length + " - " + images[i][1] + "</p>" );
}

function Correct(){

    if(i < 0){
        i = images.length - 1;
    } else if(i >= images.length){
        i = 0;
    }
}