require(['wrap!Backbone',
	'javascripts/models/user'
    ],
    function(Backbone,User){
	var UserCollection = Backbone.Collection.extend({
	    model: User,
	    url: "localhost:3000/users"
	    
	})
	return new UserCollection;
    })