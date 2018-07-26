FlowRouter.route('/account',{
	name: 'account',
	action(){
		BlazeLayout.render('accountLayout', {footer: 'footerLayout'});
	}
});

FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('SelectLayout', {footer: 'footerLayout'});
	}
})

FlowRouter.route('/start',{
	name:'home',
	action(){
		if(Session.get('game')==1)
			BlazeLayout.render('HomeLayout', {footer: 'footerLayout'});
		else
			FlowRouter.redirect('/');
	}
})

FlowRouter.route('/results',{
	name:"results",
	action(){
		//if(Session.get('game')==2)
			BlazeLayout.render('resultsLayout', {footer: 'footerLayout'});
		//else
		//	FlowRouter.redirect('/');
	}
})
