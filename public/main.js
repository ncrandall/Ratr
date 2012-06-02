require.config({
	paths: {
		jQuery: "javascripts/jquery.min",
		Backbone: "javascripts/backbone",
		underscore: "javascripts/underscore",
	
		wrap: "javascripts/plugins/wrap",
		order: "javascripts/plugins/order",
		text: "javascripts/plugins/text"
	},
	wrapJS:{
		"Backbone":{
			deps: ['underscore','jQuery'],
			attach: "Backbone"
		}
	}
});

require([
	"jQuery"
	],
	function($){
		require(['app'], function(app){
			app.initialize()
		})
	}
);
