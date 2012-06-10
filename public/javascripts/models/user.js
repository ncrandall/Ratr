require(['wrap!Backbone'],
    function(Backbone){
	var User = Backbone.Model.extend({
	    initialize: function(){
		console.log("initializing User Model");
	    }
	    
	})
	return User;
    })