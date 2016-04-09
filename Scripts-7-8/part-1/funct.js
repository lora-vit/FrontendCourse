$(function(){
	// var $elemInp=$('[type="text"]');

	// var $elemInp=$('input');

	// $elemInp.each(function(){
	// 	$(this).parent().find('.tooltip').hide();
	// })

	//  $("input").on('mouseenter',function() {
	//  	console.log($(this).next("tooltip"));
 //        $(this).parent().find(".tooltip").show();
 //    });

	//  $("input").on('mouseleave',function() {
	//  	console.log($(this).next("tooltip"));
 //        $(this).parent().find(".tooltip").hide();
 //    });
 var $blkInp=$('.blk_input');
 $blkInp.each(function(){
 	$(this).find('.tooltip').hide();
 	$(this).find('[type="text"]')
 	.on('mouseenter',function() { 		
 		$(this).siblings(".tooltip").show(); 	
 	})
 	.on('mouseleave',function() {	  
 		$(this).siblings(".tooltip").hide();
 	});
 });

 $('#btnShow').on('click',function() { 		
 	console.log("yuyuyuy");
 	$blkInp.each(function(){
 		$(this).find('.tooltip').show(); 		
 	});
 });
});
