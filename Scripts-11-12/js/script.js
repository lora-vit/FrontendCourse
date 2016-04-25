$(document).ready(function(){

	$('.container').Carousel();
//------------------------------------------------------------
	var Autor={
		name:"Лебедев А.В.(Комсомольск-на-Амуре)",
		foto:"img/ant.jpg",
		history:"&nbsp;&nbsp;&nbsp;Мир, который окружает нас, прекрасен во все времена. Он полон загадок и тайн. Это и многообразие живых существ и растений,		и замысловатые пейзажи, и непредсказуемые сюрпризы природы. Предлагаемый альбом содержит яркие фотографии, отражающие разнообразие природы планеты Земля. Откройте для себя красоту природы!",
	    mail:"vasla_vitali@mail.ru",
	    vk:"https://vk.com/creative_dimension",
	    site:"https://lori.ru/blogs/albums/2012/03/26/sily-prirody"
	};

	

	var tmpl=$("#about_template").html();
	var html = _.template(tmpl)(Autor);
	$("#about_autor").append (html);

});