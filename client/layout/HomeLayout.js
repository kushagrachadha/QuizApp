Template.HomeLayout.onCreated(function HomeOnCreated() {
            load(catCode, function(err, res){
                data = res;
            });
            Session.set('count', 0);
    });
 

   Template.HomeLayout.helpers(
    {
        options()
        {
            if(Session.get('options')[(Session.get('count'))])
                return Session.get('options')[(Session.get('count'))];
            return ['Select', 'category', 'from', 'above'];
        },
        question()
        {
            if(Session.get('ques')[(Session.get('count'))])
                return clean(Session.get('ques')[(Session.get('count'))]);
            return "loading"
        },
        result(){
        	if(Session.get('result'))
            	return Session.get('result');
            else
            	return 0;
        },
        count(){
            var q = 0;
        	if(Session.get('count'))
            {
                q = (parseInt(Session.get('count'))+1);
                var t = ("Question ("+q.toString()+"):");
                console.log(t);
        		return t;
            }
            return "";
        },
        current(){
            return current.get();
        }
    });
 
    Template.HomeLayout.events({
        'click button'(event, instance){
            event.preventDefault();
            var data;
            load(function(err, res){
                data = res;
            });
            set1();
            return false;
        }
    });
 

    Template.HomeLayout.events({
      "click #answer": function(event, template) {
        event.preventDefault();

        if(parseInt(Session.get('answered'))==0){
            Session.set('answered', 1);                                 //user has answered current question
            console.log('answer has been ', Session.get('answered'));
            var element=(event.currentTarget).getAttribute('value');
            if (element==Session.get('ans')[(Session.get('count'))]){
                event.currentTarget.setAttribute('style','background:#66CD00; color:white;font-style:bold');
                Session.set('result', parseInt(Session.get('result'),10)+1);
                console.log("correct answer" + Session.get('result'));
                current.set("That was a correct answer, good going!");
            }
            else{
                event.currentTarget.setAttribute('style','background:#ff1919; color:white;font-style:bold')
                console.log("wrong answer");
                current.set('You tried but correct answer was '+Session.get('ans')[(Session.get('count'))]);
            }
            setTimeout(function(){
                var t = parseInt(Session.get('count'));
                if(t<9)
                    Session.set('count', (t+1));
                else
                {
                    Session.set('game',2);                  //2 means game finished
                    FlowRouter.redirect('/results');
                }
            },1000);
            set1();
        }
        return false;
      }
    });
