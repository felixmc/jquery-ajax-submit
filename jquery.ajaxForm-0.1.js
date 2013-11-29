(function($) {

	$.fn.ajaxSubmit = function(options) {
		var $form = $(this);        
		var method = options.method || $form.attr("method");
		var action = options.action || $form.attr("action");
		var data = options.data ||  {};
		var success = options.success || function(data){  };
			
		$form.on("submit", function(event) {
			$form.children().each(function() {
				var $child = $(this);
				var name = $child.attr("name");
				if ($child.is("input:not([type=submit],[type=button])") || $child.is("textarea") && data[name] == undefined) {
					data[ name ] = $child.val();
				}
			});
			
			$.ajax({ url: action, type: method, data: data, success: success });
			event.preventDefault();
		});
	};
	
})(jQuery);