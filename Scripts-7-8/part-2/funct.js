$(function(){
	// var $elemInp=$('[type="text"]');
	var $elem_a=$('a');
	var $elem_p=$('p');
	var $elem_li=$('li');

	console.log($elem_a);
	$elem_p.hide();
	$elem_p.first().show();
	$elem_li.first().addClass("activ");

	$elem_a.on('click',function(){
		$elem_li.removeClass("activ");
		$(this).parent().addClass("activ");	
	
		var tabnom=$(this).attr('href');
		console.log(tabnom);
		$elem_p.hide();
		$('div '+tabnom).find('p').show();
	});
});
