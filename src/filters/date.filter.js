import Vue from 'vue'

// use {{date | date('time')}}
Vue.filter('date', function (value, format = 'date') {
	const date = Date.parse(value);
	const year = new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric'
	}).format(date);

	const month = new Intl.DateTimeFormat('ru-RU', {
		month: '2-digit'
	}).format(date);

	const day = new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit'
	}).format(date);

	const hour = new Intl.DateTimeFormat('ru-RU', {
		hour: '2-digit'
	}).format(date);
	const minute = new Intl.DateTimeFormat('ru-RU', {
		minute: '2-digit'
	}).format(date);

	if(format === 'date-time'){
		return `${year}.${month}.${day} ${hour}:${minute}`
	} else {
		return `${year}.${month}.${day}`
	}  
})
