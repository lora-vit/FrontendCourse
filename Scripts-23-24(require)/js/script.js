function Model(data){
	var self=this;

self.data=data;
	// self.data=['TEST one','TEST two','TEST three'];

// -----------------------------------------------------------
self.addItem=function(item){

	if(item.length===0){
		return;
	}
	self.data.push(item);

	return self.data;
};

// -----------------------------------------------------------
self.removeItem=function(item){
	alert(item);
	var index=self.data.indexOf(item);

	if(index===-1){
		return;
	}
	self.data.splice(index,1);
	return self.data;
};
}

//===============================================VIEW==========
function View(model){
	var self=this;

//----------------------------------------------------
	function init(){

	var wrapper=tmpl($('#wrapper-template').html());

	$('body').append(wrapper);

	self.elements={
		input :         $('.item-value'),
		addBtn :        $('.item-add'),
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

//================================================CONTROLLER====
function Controller(model,view){
	var self=this;

	view.elements.addBtn.on('click',addItem);
	view.elements.listContainer.on('click','.item-delete',removeItem);

	function addItem(){
		var newItem=view.elements.input.val();

		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}

	function removeItem(){
		var item=$(this).attr('data-value');
		model.removeItem(item);
		view.renderList(model.data);
	}
}

$(function(){
	var firstToDoList=['TEST one','TEST two','TEST three'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model,view)
});
