define (
	'Controller',

	['jquery', 'tmpl', 'Model','View'],

	function () {
		function Controller(model,view) {
			var self=this;
          var orderNum=0;//для хранения номера ,откуда 'взят на редактирование

          view.elements.addBtn.on('click',addItem);
          view.elements.upBtn.on('click',upItem);
          view.elements.listContainer.on('click','.item-delete',removeItem);
          view.elements.listContainer.on('click','.item-edit',editItem);

          function upItem(){
          	var newItem=view.elements.input.val();
          	model.editItem(orderNum, newItem); 
          	
          	view.renderList(model.data);
          	view.elements.input.val('');
          	$('.item-up').attr('disabled', 'disabled');
          }

          function addItem(){
          	var newItem=view.elements.input.val();

          	model.addItem(newItem);
          	view.renderList(model.data);
          	view.elements.input.val('');
          	$('.item-up').attr('disabled', 'disabled');
          }

          function removeItem(){
          	console.log(this);
          	var item=$(this).attr('data-value');
          	$('.item-up').attr('disabled', 'disabled');
          	model.removeItem(item);
          	view.renderList(model.data);
          	
          }
          function editItem(){
          	console.log(this);
          	var item=$(this).attr('data-value');
          	orderNum = $(this).parent().index(); 
          	$('.item-value').val(item).focus();
          	
          	$('.item-up').removeAttr('disabled');

          	
          	view.renderList(model.data);
          	
          }
      };
      return Controller
  }
  );