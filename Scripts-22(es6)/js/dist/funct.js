'use strict';

$(function () {
	console.log('creating object with questions');
	var obj = {
		"name": "Test",
		"questions": [{
			"ind": "0", //номер вопроса
			"question": "answ1?", //вопрос
			"answer": 1, //индекс правильного ответа
			"answers": ["a", "b", "c"]
		}, {
			"ind": "1",
			"question": "answ2?",
			"answer": 2,
			"answers": ["a", "b", "c"]
		}, {
			"ind": "2",
			"question": "answ3?",
			"answer": 0,
			"answers": ["a", "b", "c"]
		}]

	};
	var rezult = {};

	var tmp = JSON.stringify(obj);

	console.log(tmp);
	localStorage.setItem("test", tmp);

	$("#createTest").on("click", function () {
		createTest();
	});

	function createTest() {
		var testData = localStorage.getItem("test");
		testData = JSON.parse(testData);
		console.log(testData);
		//-----------------------------------------------------
		var tmpl = $("#template").html();
		var html = _.template(tmpl)(testData);
		$("body").append(html);
		//-----------------------------------------------------
		$("#verifyTest").on("click", function () {
			verifyTest();
		});
	};

	function verifyTest() {
		var index = 1;
		var validAnswers = 0;
		var testData = localStorage.getItem("test");
		testData = JSON.parse(testData);

		var numVar = -1;
		var numAns = 0;

		var $radio = $("[type=radio]");
		console.log($radio);
		var countAnswers = $radio.length;

		for (var i = 0; i < countAnswers; i++) {
			console.log('i=' + i);
			console.log($radio[i]);
			console.log($($radio[i]).is(":checked"));
			console.log('вопр:' + $($radio[i]).attr("name"));

			index = Number($($radio[i]).attr("name")); //номер вопроса
			if (index > numAns) {
				numVar = 0;
				numAns = index;
			} else {
				numVar += 1;
			}
			if ($($radio[i]).is(":checked")) {
				if (testData.questions[index].answer == numVar) validAnswers += 1;
			}
			console.log('numVar=' + numVar + ',numAns=' + numAns);
			console.log(testData, index);
			console.log("-", testData.questions[index]);
			console.log('VN=' + testData.questions[index].answer);
		}
		console.log(validAnswers, countAnswers);
		out_modalWind(validAnswers, numAns + 1);
	};

	function out_modalWind(validAnswers, countAnswers) {

		$('#modal_container1').append(validAnswers);

		if (validAnswers == countAnswers) {
			$('#modal_container2').append("100%!");
			$('#modal_container3').append("Поздравляем!");
		} else {

			$('#modal_container2').append((validAnswers * 100 / countAnswers).toFixed(2) + "%");
			$('#modal_container3').append("Пробуйте еще раз.");
		}
		//------------------------------------------------------------------------------
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		function () {
			// пoсле выпoлнения предыдущей aнимaции
			$('#modal_form').css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
			.animate({ opacity: 1, top: '50%' }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});

		/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
		$('#modal_close, #overlay').click(function () {
			// лoвим клик пo крестику или пoдлoжке
			$('#modal_form').animate({ opacity: 0, top: '45%' }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function () {
				// пoсле aнимaции
				$(this).css('display', 'none'); // делaем ему display: none;
				$('#overlay').fadeOut(400); // скрывaем пoдлoжку
			});

			$("div").remove("#tester");
		});
	};
});
