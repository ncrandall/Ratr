require(['wrap!Backbone',
	'javascripts/collections/user'],
    function(Backbone, UserCollection){
	var UserView = Backbone.View.extend({
	    el: "#user",
	    tagName: "div",
	    template:_.template("Hello <%= username%>"),
	    render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	    }
	})
	
	return UserView;
    })

