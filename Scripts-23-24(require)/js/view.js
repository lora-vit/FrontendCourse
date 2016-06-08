define(
'View',

['jquery','tmpl','Model'],

function($){

function View(model){
	var self=this;

//----------------------------------------------------
	function init(){

	var wrapper=tmpl($('#wrapper-template').html());

	$('body').append(wrapper);

	self.elements={
		input :         $('.item-value'),
		addBtn :        $('.item-add'),
		upBtn :         $('.item-up'),		        
		listContainer : $('.item-list'),
		deleteBtn :     $('.item-delete')
	};
	// alert(self.elements.addBtn.html);
	self.renderList(model.data);
	}

//---------------------------------------------------
	self.renderList=function(data){

	var list=tmpl($('#list-template').html(),{data:data});
	self.elements.listContainer.html(list);
	};

	init();

};
return View;
}

);