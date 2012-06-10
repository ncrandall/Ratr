define([
	'wrap!Backbone',
	'javascripts/models/user'
	],
	function(Backbone, userList, user){
		var Router = Backbone.Router.extend({
			routes: {
				'/users/list' : 'showUserList',
				'/users/:user' : 'showUser',
				'' : 'defaultAction'
			},
			showUserList: function(){
				//userList.render();
				console.log("going to show user list");
			},
			showUser: function(){
				//user.render();
				console.log("going to show user");
			},
			defaultAction: function(actions){
				console.log("No Route: ", actions);
			},
			initialize: function(){
			}
		});

		function initialize() {
			new Router();
			Backbone.history.start();
		}
		
		return {
			initialize: initialize
		}
	}
);	
