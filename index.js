$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrolly > 20 )
			$(".navbar").addClass("sticky");
		else
			$(".navbar").removeClass("sticky");
	});

	$('.menu-toggler').click(function(){
		$(this).toggleClass("active");
		$(".navbar-menu").toggleClass("active");
	});
});