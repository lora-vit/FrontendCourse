$(function(){
  $.ajax({
    url: "https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",
    success: getData,
    error: function(){
      console.log('error');
    }
  });
});

function getData(data){
  var array = JSON.parse(data);

  console.log('исходный массив',array);
  /* ---------------------------------------------------------------------------------------------- */ 
  var skills = _.map(array, 'skills');
  console.log("после map: ", skills);

  skills = _.flatten(skills);
  console.log("после flatten: ", skills);

  skills = _.uniq(skills);   
  console.log("уникальные до сортировки: ", skills);

  skills = _.sortBy(skills);
  console.log("*** REZULT 1 после сортировки: ", skills);


  /* ---------------------------------------------------------------------------------------------- */ 
  var friends = _.union(
    _.sortBy(
      _.flatMap(_.map(array, function(o) {
        return _.map(o.friends, 'name')
      }))
      )
    );
  console.log("--friends: ", friends);
  /* ---------------------------------------------------------------------------------------------- */  
 // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends);
 
 var names=_.map(array,'name');
 console.log('имена: ', names);
 /* ---------------------------------------------------------------------------------------------- */ 

 var masfr=_.map(array,'friends');
 console.log('друзья: ', masfr);


 /* ---------------------------------------------------------------------------------------------- */ 
 

 console.log('*** REZULT 2 : ',_.map( _.orderBy(array,function(o){
  return o.friends.length;
},'desc'),'name')
 );

 /* ---------------------------------------------------------------------------------------------- */ 
 /* Массив всех друзей всех пользователей, не должно быть повторяющихся людей*/


 var friends = _.map(array, "friends");
 friends = _.flatten(friends);
 //console.log('массивы друзей', friends);
 friends = _.map(friends, "name");
 console.log('все имена ', friends); 
 friends = _.uniq(friends);

 console.log('*** REZULT 3 (все друзья без повторов) : ', friends);
}