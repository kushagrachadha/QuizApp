var quizA = 0;
var quesA = 0;
var attA = 0;
var attP = 0;
var cAm = 0;
var cPer = 0;

Template.accountLayout.onCreated( function accountoncreated(){
	
	
	if(quesA!=0)
		attP = attA*100/quesA;
	if(quesA!=0)
		cPer = cAm*100/quesA;
});




Template.accountLayout.helpers({
	xp(){
		return "your experience points";
	},
	quizAmount(){
		return quizA;
	},
	attemptAmount(){
		return attA;
	},
	attemptPercent(){
		return attP;
	},
	questionAmount(){
		return quesA;
	},
	correctAmount(){
		return cAm;
	},
	correctPercent(){
		return cPer;
	},
});
