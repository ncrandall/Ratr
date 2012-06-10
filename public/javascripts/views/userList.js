require(['wrap!Backbone',
	'javascripts/views/user'],
    function(Backbone, UserView){
	var UserListView = Backbone.View.extend({
	    el: "#userList",
	    tagName: "div",
	    render: function(){
		_.each(this.collection.models, function(model){
		    var view = new UserView({model: model});
		    this.$el.append(view.render());
		},this);
	    }	
	})
	return UserListView;
    });