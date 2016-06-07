
/*     возведение в степень     */
var app={
pow:function (x,n)
{
	var x_in_n=1;
    //   Сделаем степень положительной и целой
    var m=Math.abs(Math.ceil(n));
    for (var i = 0; i < m; i++) {
    	x_in_n*=x;
    }
    return x_in_n;
},

   // проверка наличия элемента в массиве   
 check_access:function (mas_name,name)
{
	for(var i=0;i<mas_name.length;i++)
	{
		if(name===mas_name[i])
		{
			return true;
		}
	}
	return false;
}
}
module.exports=app;
 


/*     программа    */

// var x=prompt("Введите число, с которым будем работать:");
// var n=prompt("В какую степень будем возводить это число:");
// var rezult=paw(x,n);
// alert(x+' в степени '+n+' равен '+rezult);
// console.log(x+' в степени '+n+' равен ',rezult);




