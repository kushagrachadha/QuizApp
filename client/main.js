import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

answer = new ReactiveVar("");
question = new ReactiveVar("");
incorr = new ReactiveVar("");
options = new ReactiveVar("");
result = new ReactiveVar("");
current = new ReactiveVar("Ok, Let's Go!");

data = {};

load =function(cat) {
        var data1;
        var url = "http://opentdb.com/api.php?amount=10&category="+cat+"&type=multiple";
        Meteor.call('getJson', url, function(err, res) {
            data1 = res;
            console.log("Data: ", (data1));
            Session.set("questions", JSON.stringify(data1));
        });
        Session.set('result',0);
        Session.set('count', -1);
        return data1;
    }
 
set1 = function()
    {
        var temp = Session.get('questions');
        temp = JSON.parse(temp);
        if(temp!=undefined) {
        	var ansArr = [], quesArr = [], optionsArr = [];
        	for(var i=0; i<10; i++)
        	{
        		ansArr[i] = clean(temp.results[i].correct_answer);
	            quesArr[i] = (temp.results[i].question);
	            optionsArr[i] = randomizer((temp.results[i].correct_answer), temp.results[i].incorrect_answers);
	        }
            Session.set('ques',quesArr);
            Session.set('ans',ansArr);
            Session.set('options', optionsArr);
            Session.set('answered', 0);                     //whether user entered option, 0 for no & 1 for yes
        }
    }
 
// User management in Meteor

Accounts.ui.config({
   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});