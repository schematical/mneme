/*global
	$
*/
$(document).ready(function () {
	'use strict'; // branch
    var $gridItems = $('.grid .grid-item'),
		$grid;

    $gridItems.show();
    $grid = $('.grid').masonry({
        itemSelector: '.grid-item'
    });
    $grid.imagesLoaded().progress(function (imgLoad, image) {
        var $gridItem = $(image.img).parents('.grid-item');
        $gridItem.removeClass('loading');
        if (image.isLoaded) {
            $gridItem.addClass('loaded');
        } else {
            $gridItem.addClass('unloaded');
        }
        $grid.masonry('layout');
    });
});
