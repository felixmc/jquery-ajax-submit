(function($) {
	var validElements = ["input:not([type=submit],[type=button])", "textarea", "select"].join();

	$.fn.ajaxSubmit = function(options) {
		var $form = $(this);
		options = options || {};
		var method = options.method || $form.attr("method") || "GET";
		var action = options.action || $form.attr("action") || document.URL;
		var data = options.data ||  {};
		var success = options.success || function(data){  };
			
		$form.on("submit", function(event) {
			$form.children().each(function() {
				var $child = $(this);
				var name = $child.attr("name");

				if(data[name] == undefined && $child.is(validElements)) {
					data[ name ] = $child.val();
				}
			});
			
			$.ajax({ url: action, type: method, data: data, success: success });
			event.preventDefault();
		});
	};
	
})(jQuery);