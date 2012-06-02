var Mongoose = require('mongoose').Mongoose;

Mongoose.model('User',{
    properties: ['firstName', 'lastName', 'email', 'username', 'password'],
    
    indexes: ['email'],
    
    getters: {
	fullName: function(){
	    return this.firstName + " " + this.lastName;
	}
    }
})