
Template.SelectLayout.onCreated(function SelectOnCreated() {
    Session.set('game', 0);         //0 for game off, 1 for gamee on & 2 for game finished
});

    Template.SelectLayout.helpers(
    {
        categories: function(){
            return cat;
        },
    });
 
selectedCat = "no", catCode = '10';                  //Current selected list values
    Template.SelectLayout.events({
        "click button"(event, instance) {
            event.preventDefault();
            if(selectedCat==="no")
            {
                //code to display dialog box
                return false;
            }
            else
            {
                var data;
                load(catCode, function(err, res){
                        data = res;
                });
                Session.set('game', 1);         //0 for game off, 1 for game on 
                FlowRouter.redirect('/start');
                set1(data);
                return false;
            }
        },
        "change #category-select": function (event, template) {
            selectedCat = $(event.currentTarget).val();
            catCode = getCode(selectedCat);
            console.log("category : " + catCode);
            var data;
                load(catCode, function(err, res){
                        data = res;
                });
               
        },
    });