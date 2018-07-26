import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Future = Npm.require('fibers/future');

});

var response;
Meteor.methods({
  	// The method expects a valid IPv4 address
  	'getJson': function (url) {
      var future = Future();
  		console.log("fetching json");
    	if (Meteor.isServer) {
          
        	this.unblock();
        	response = Meteor.http.call("GET", url, {timeout: 30000}); 
        	if (response.statusCode == 200)
          {
            var resp = JSON.parse(response.content);
            console.log("Json received for "+url);
            return resp;
          }
          else {
            console.log("Json call error: " + response.statusCode);
          }
      }
    	//while(response==undefined)
  },
  'getRes': function()
  {
  	return response;
  }
});