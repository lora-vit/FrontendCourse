
$(function() {
  $inp = $('#inp1');
  console.log($inp);
  $("#btn").click(function() {
    console.log("cl=",$inp.val());
    var strInp = $inp.val();
    searching(strInp);

  });

 

  function searching(str_seek) {
     console.log("d=",str_seek);
    $.ajax({
      // AJAX-specified URL
      url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" + str_seek,
      dataType: "jsonp",
      // Handle the success event
      success: function(data) {
        console.log(data);        

        var strOut = data.responseData.results[0].content;
        $("#rezult").append(strOut);
        outering(data.responseData.results);
       
      },
      error: function(error) {
        console.log(error);
      }
    });
   
  };

function outering(arr_response){
  console.log(arr_response);
  for(var i=0;i<4;i++){
  
    $("#rezult").append('<div class="c_title">'+arr_response[i].title+'</div>');
    $("#rezult").append('<div class="c_url">'+arr_response[i].url+'</div>');
    $("#rezult").append('<div class="c_content">'+arr_response[i].content+'</div>');
    
  }

//$("#rezult").append('<p>'+strOut+'</p>');
return;

}

})