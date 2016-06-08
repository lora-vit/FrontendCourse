define(
'Model',

['jquery'],

function(){

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

 self.editItem = function (index, text) {  //редактирование
     if (text != '') {                     //если текст не пустая строка
         self.data[index] = text;          //добавляет текст
    }
    return self.data;                     //возвращаем обнавленные данные в точку вызова(массив)
 };
// -----------------------------------------------------------
self.removeItem=function(item){

	var index=self.data.indexOf(item);

	if(index===-1){
		return;
	}
	self.data.splice(index,1);
	return self.data;
};

};
return Model;
}

);