var tester={
	container : document.body,
	arr_question:["Вопрос №1 ?","Вопрос №2  ?","Вопрос №3 ?"],
    arr_answer:[["Вариант ответа №1","Вариант ответа №2","Вариант ответа М3"],
                ["2Вариант ответа №1","2Вариант ответа №2","Вариант ответа №3"],
                ["3Вариант ответа №1","3Вариант ответа №2","3Вариант ответа №3"]],
	createCheck: function(textOption){

		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";

		var label = document.createElement('label');
		label.style="display:block";

		label.appendChild(checkbox);
		label.appendChild(document.createTextNode(textOption));

       
       return label;

    },
//------------------------------------------------------------
    createSubmitButton: function(textButton){

    	var buttonSubmit=document.createElement('input');
    	buttonSubmit.type="submit";
    	buttonSubmit.value=textButton;

	    this.container.appendChild(buttonSubmit);
	},
//------------------------------------------------------------
	createDivText:function(textDiv){

		var m_div=document.createElement('div');
		//m_div.style=" text-align: center";
		m_div.appendChild(document.createTextNode(textDiv));

		//вывод
		this.container.appendChild(m_div);

	},	
	//------------------------------------------------------------
	//createOrderList:function(arr_quest,arr_answ){
	createOrderList:function(){
		var m_ol=document.createElement('ol');		
		for(var i=0;i<this.arr_question.length;i++){
		m_ol.appendChild(this.createNodeOrderList(this.arr_question[i],this.arr_answer[i]));
	}

		this.container.appendChild(m_ol);
	},
//------------------------------------------------------------
	createNodeOrderList:function(textList,arr){
		
		var m_li=document.createElement('li');
		m_li.appendChild(document.createTextNode(textList));
		
		for(var i=0;i<arr.length;i++)
		{
			m_li.appendChild(this.createCheck(arr[i]));
		}	
		
		
		return m_li
	}
}
//------------------------------------------------------------

//------------------------------------------------------------

tester.createDivText("Тест по программированию");

tester.createOrderList();

tester.createSubmitButton("Проверить мои результаты");