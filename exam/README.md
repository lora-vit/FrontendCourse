1) Выполнить npm install 
 Установятся :
    "grunt": "^1.0.1",
    "grunt-contrib-concat": "^1.0.1",
    "grunt-contrib-cssmin": "^1.0.1",
    "grunt-contrib-sass": "^1.0.0",
    "grunt-contrib-uglify": "^1.0.1"

2) Выполнить grunt

3) выполняет функции:
3.1)   - по кнопке "Find your holiday partner" происходит случайый выбор слова из списка ['red','green','yellow','blue','white','orange'] для поиска картинок плитки;


3.2)   - по кнопке "See other partners"  происходит запрос фотографий людей, пользуясь  API  https://randomuser.me ;

3.3)   -  по кнопке "Search partners" происходит запрос по слову, введенному пользователем;

3.4)   -  при начальной загрузке страницы просходит запрос картинок для плитки по случайному выбору из списка ['books','bouling','sailboat','build','music','mountains','garden','aerostat','dog','danc'];

3.5)   - поиск для плитки ведется с использованием https://pixabay.com/api/ по ключу 2698063-d3e1f5cf1626513d42e1d7e03   