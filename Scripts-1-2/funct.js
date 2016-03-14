
/*     возведение в степень     */
function paw(x,n)
{
	var x_in_n=1;
    //   Сделаем степень положительной и целой
    var m=Math.abs(Math.ceil(n));
    for (var i = 0; i < m; i++) {
    	x_in_n*=x;
    }
    return x_in_n;
}
/*     заполнение массива    */
function fill_mass(mas_name,n)
{
	for(var i=0;i<n;i++)
	{
		mas_name.push(prompt('Заполняем элемент '+i));
	}
	return;
}
/*     проверка наличия элемента в массиве   */
function check_access(mas_name,name)
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


/*     программа    */

var x=prompt("Введите число, с которым будем работать:");
var n=prompt("В какую степень будем возводить это число:");
var rezult=paw(x,n);
alert(x+' в степени '+n+' равен '+rezult);
console.log(x+' в степени '+n+' равен ',rezult);

/*            Задача 2          */
var mas_nm=[''];

fill_mass(mas_nm,5);

console.log(mas_nm);

var user_name=prompt('Введите имя пользователя:');
var fl_yes=check_access(mas_nm,user_name);
if (fl_yes)
{
alert(user_name+',вход выполнен.');
}
else
{
alert('Пользователя '+user_name+' в списке нет');
}


