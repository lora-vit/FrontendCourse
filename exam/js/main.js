$(function() {
    $('.jcarousel').jcarousel({

    });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

})
$(function() {
    var $persones = $('#persones').html();
    var searchPartner=$('#see-partners');

    var data = [
        {
        photo:'img/partner1.png',
        name: 'Bradley Hunter',
        about: 'Based in Chicago. I love playing tennis and loud music.',
        pict:'img/icon1.png'
    },
    {
        photo:'img/partner2.png',
        name: 'Heather Walker',
        about: 'I\'m a happy person that loves cats and climbing on mountains.',
        pict:'img/icon2.png'
    },
    {
        photo:'img/partner3.png',
        name: 'Lucas Marsha',
        about: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.',
       // photo:'https://pixabay.com/get/e83cb4072ff31c2ad65a5854e44a4f9ee371e1c818b5174791f2c970a4e4_640.jpg',
        pict:'img/icon3.png'
    },
    {
        photo:'img/partner4.png',
        name: 'Bradley Hunter',
        about: 'Based in Chicago. I love playing tennis and loud music.',
        pict:'img/icon4.png'
    }
]

 

    var content = tmpl($persones, {data: data});

    $('.persones').append(content);

    //-----------------------------------------------------------------------------------------------
    searchPartner.on('click', function(){          
              
              var api = "https://randomuser.me/api/?&results=4";

                 $.getJSON(api, function (req) {
                     var image = req.results;
                  console.log(image);
            for (var i = 0; i < image.length; i ++) {
                   data[i].photo=String(image[i].picture.large);
                   var s=image[i].name.first;
                   data[i].name= s.charAt(0).toUpperCase() + s.substr(1);
                   s=image[i].name.last;
                   data[i].name= data[i].name+' '+s.charAt(0).toUpperCase() + s.substr(1);  
                  
                   data[i].about='Based in '+image[i].location.city.toUpperCase() +
                   ', state '+ image[i].location.state.toUpperCase()+
                   '/ phone:'+ image[i].cell;        
            }
     var content = tmpl($persones, {data: data});

     $('.persones').html(content);

                   
                 });
           
                 });
    //-----------------------------------------------------------------------------------------------
});
$(function () {
    var $grid = $('.grid');
    $grid.masonry({
        itemSelector: '.grid-item',
      
        gutterWidth: 16,
        singleMode: false,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
         	    }
    });
});
$(function(){
    $.support.cors = true;
    var gridItem = $('.grid-item');
    var searchForm = $('.search-form__sarea');
    var searchButton = $('#search-form__sideas');
    var searchFree=$('search-free');
  
    var arr_defquery = ['books','bouling','sailboat','build','music','mountains','garden','aerostat','dog','danc'];
                //var rand = min + Math.floor(Math.random() * (max + 1 - min));
                var rand =  Math.floor(Math.random() * (9 + 1 ));
    var defaultQuery = arr_defquery[rand];
    var api = 'https://pixabay.com/api/?key=2698063-d3e1f5cf1626513d42e1d7e03&q='+ defaultQuery +'&image_type=photo&min_width=300&min_height=200&per_page=100';



        $.getJSON(api, function (data) {
            var image = data.hits

			

			gridItem.each(function(index){
				$(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                        .append('<p class="image-item">'+ image[index].tags +'</p>');
			})
        });
        //---------------------------------------------------------------------------
      
            $('#search-free').click( function(){
           
                var arr_query = ['red','green','yellow','blue','white','orange'];
                //var rand = min + Math.floor(Math.random() * (max + 1 - min));
                var rand =  Math.floor(Math.random() * (5 + 1 ));
              
                console.log(arr_query[rand]);
                var api = 'https://pixabay.com/api/?key=2698063-d3e1f5cf1626513d42e1d7e03&q=' + arr_query[rand] + '&image_type=photo&min_width=300&min_height=200&per_page=100';
                $.getJSON(api, function (data) {
                    var image = data.hits

                  
                    if(image.length>0){
                    $('.image-item').remove();
                    gridItem.each(function(index){
                        $(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                                .append('<p class="image-item">'+ image[index].tags +'</p>');
                    })}

                });
          
        });
        //---------------------------------------------------------------------------
        searchButton.on('click', function(){
            if(searchForm.val().length>0){
                var query = searchForm.val();
                console.log(query);
                var api = 'https://pixabay.com/api/?key=2698063-d3e1f5cf1626513d42e1d7e03&q=' + query + '&image_type=photo&min_width=300&min_height=200&per_page=100';
                $.getJSON(api, function (data) {
                    var image = data.hits;

                   
                    if (image.length>0) {
                    $('.image-item').remove();
                    gridItem.each(function(index){
                        $(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                                .append('<p class="image-item">'+ image[index].tags +'</p>');
                    })}
                });
            }
        });
       
        searchForm.keypress(function(e) {
            if(e.which == 13){
                if(searchForm.val().length>0){
                    var query = searchForm.val();
                    console.log(query);
                    var api = 'https://pixabay.com/api/?key=2698063-d3e1f5cf1626513d42e1d7e03&q=' + query + '&image_type=photo&min_width=300&min_height=200&per_page=100';
                    $.getJSON(api, function (data) {
                        var image = data.hits;

                     if(image.length>0){
                        $('.image-item').remove();
                        gridItem.each(function(index){
                            $(this).css({'background-image':'url(' + image[index].webformatURL + ')','background-size':'cover'})
                                    .append('<p class="image-item">'+ image[index].tags +'</p>');
                        })}

                    });
                }
            }
        })
})
