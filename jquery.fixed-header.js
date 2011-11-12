/**
 * 
 */

(function($){
	$.fn.fixedHeader = function(options) {
				
		var elt = this;
	
		$(window).scroll(function (event) {
			
			if ($(window).scrollTop() > elt.position().top) {

				if (!elt.next('.popped').length) {
					
					var popped = elt.clone().addClass('popped');
					elt.after(popped);
					
				}
				
				return;
				
			}
			
			elt.next('.popped').remove();
			
		});
		
	};
})(jQuery);
