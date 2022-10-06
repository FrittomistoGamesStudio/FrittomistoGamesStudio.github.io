$(document).ready(function() {
    $('.image-link').magnificPopup({
        type:'image',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
    });

    $(".js-video-button").modalVideo();


});