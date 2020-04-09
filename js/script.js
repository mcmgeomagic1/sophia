$('.js--logo').waypoint(function(direction) {
	$('.js--logo').addClass('animated jackInTheBox');
}, {
	offset: '90'
});
$('.js--main-nav').waypoint(function(direction) {
	$('.js--main-nav').addClass('animated zoomIn');
}, {
	offset: '50%'
});

$('.js--small').waypoint(function(direction) {
	$('.js--small').addClass('animated rotateIn');
}, {
	offset: '50%'
});