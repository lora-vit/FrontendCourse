
var str_timer=document.getElementById("str_time");
var str_mlSecund=document.getElementById("str_mlSecund");
var intervalID=0;

var myTimer= {
  HH:0,
  MM:0,
  SS:0,
  mSS:0,
  work_SEK:0,
  begin_SEK:0
};

//-----------------------------------------------------------------------
 function format(val,len){
  var pad_left=""+val;
  while(pad_left.length<len){
  pad_left="0"+pad_left;
  }
  return pad_left;
};

//------------------------------------------------------------------------
  function output_time(){
    str_time.innerHTML=format(myTimer.HH,2)+"."+format(myTimer.MM,2)+"."+format(myTimer.SS,2);
    str_mlSecund.innerHTML=format(myTimer.mSS,3);
  };

//------------------------------------------------------------------------
//обновляет время и показывает его
  function counter(){

   var d=new Date();
   var cur_time=d.getTime();

   
  if (myTimer.begin_SEK==0)
  {
    
    myTimer.begin_SEK=cur_time;
  }
  else
  {
     console.log("*"+myTimer.work_SEK+'-'+cur_time +'-'+myTimer.MM +'-'+myTimer.SS +'-'+myTimer.mSS);

    myTimer.mSS=Number(myTimer.work_SEK)+Number(cur_time)-Number(myTimer.begin_SEK);

    myTimer.SS=Math.floor(myTimer.mSS/1000);    
    myTimer.SS=myTimer.SS%60;               //секунды

    myTimer.MM=Math.floor(myTimer.SS/60);
    myTimer.MM=myTimer.MM%60;               //минуты

    myTimer.HH=Math.floor(myTimer.MM/60);

    myTimer.mSS=myTimer.mSS%1000;
  
    console.log(cur_time +'-'+myTimer.MM +'-'+myTimer.SS +'-'+myTimer.mSS);
     
  }
  output_time();
} ;

//-------------------------------------------------------------------

elem1.onclick = function() {
  var valueButton=document.getElementById("elem1");
  if(valueButton.value=="Start" || valueButton.value=="Cont..")
{   
   myTimer.begin_SEK=0;
   intervalID=setInterval( counter,50);
   valueButton.value="Pause";

}
else
{
   clearTimeout(intervalID);

   valueButton.value="Cont..";     
   var d=new Date();
   var cur_time=d.getTime();
   myTimer.work_SEK+=Number(cur_time)-Number(myTimer.begin_SEK);
}

   console.log(intervalID);
   
};
//-------------------------------------------------------------------

 elem2.onclick = function() {

    var valueButton=document.getElementById("elem1");
    valueButton.value="Start";

    clearTimeout(intervalID);

    console.log(intervalID);
    
    myTimer.mSS=0;
    myTimer.HH=0;
    myTimer.MM=0;
    myTimer.SS=0;
    myTimer.work_SEK=0;

    output_time();
  };
//----------------------------------------------------------------------



