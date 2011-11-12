/**
 * 
 */

(function($){
	$.fn.fixedHeader = function(options) {

		var settings = {
			'position': 'fixed',
			'top': 0,
			'z-index': 2000
		};
		
		var elt = this;
	
		$(window).scroll(function (event) {
			
			if ($(window).scrollTop() > elt.position().top) {

				if (!elt.next('.popped').length) {
					
					var popped = elt.clone().addClass('popped');					
					popped.css('position', settings['position']);
					popped.css('top', settings['top']);
					popped.css('z-index', settings['z-index']);

					elt.after(popped);
					
				}
				
				return;
				
			}
			
			elt.next('.popped').remove();
			
		});
		
	};
})(jQuery);
