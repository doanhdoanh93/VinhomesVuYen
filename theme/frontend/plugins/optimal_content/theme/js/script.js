var OPTIMAL_CONTENT = (function(){
	var playYoutobe = function()
	{
		if($('.youtube-iframe').length == 0) return;
		$(".youtube-iframe").click(function(event) {
			var link = $(this).attr('data-id');
			$(this).attr('data-content','1');
			event.preventDefault();
			var html = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/'+link+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
			$(this)[0].outerHTML = html;
		});
	}
	return {_:function(){
		playYoutobe();
	}};
})();
jQuery(document).ready(function($) {
	OPTIMAL_CONTENT._();
});
