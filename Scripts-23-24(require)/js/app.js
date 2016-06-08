requirejs.config({
    paths:{
        'jquery': 'jquery-2.2.3.min',
        'tmpl':'tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jquery',
        },
        'tmpl':{
            exports: 'tmpl',
        }
    }
});

require(
['jquery','tmpl','Model','View','Controller'

],
function($,tmpl,Model,View,Controller){

$(function(){
	var firstToDoList=['TEST one','TEST two','TEST three'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model,view)
});	

}

);