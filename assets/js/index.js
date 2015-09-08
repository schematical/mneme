$(document).ready(function(){
    var $gridItems = $('.grid .grid-item');
    $gridItems.show();
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item'
    });
    $grid.imagesLoaded().progress(function( imgLoad, image ){
        //console.log('progress', imgLoad, image);
        var $gridItem = $(image.img).parents('.grid-item');
        $gridItem.removeClass('loading');
        /*$(image.img).parents('.image-wrapper').animate({
            'background-color': 'transfert'
        }, 500);*/
        //console.log(image.isLoaded);
        if( image.isLoaded ){
            $gridItem.addClass('loaded');
        }else{
            $gridItem.addClass('unloaded');
        }
        $grid.masonry('layout');
    });
});
