$(document).ready(function() {
	var animationName = "animated bounce";
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $('#fullpage').fullpage({
    	sectionsColor: ['#0087cc', '#eaeaed', '#ffffff'],
    	anchors:['firstSection', 'secondSection', 'thirdSection'],
    	controlArrows: false,
    	afterLoad: function(anchorLink, index){
    		var loadedSection = $(this);
			loadedSection.find('.page').addClass(animationName);
    	}
    });
});