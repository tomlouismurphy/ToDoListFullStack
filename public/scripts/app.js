console.log('operational');

$.ajax({
	url: '/tasks',
	type: 'GET',
	dataType: 'JSON',
	success: (data) => {
		console.log(data);
	}
	failure: (err) => {
		console.log(err);
	}
})

fetch('http://localhost:9292/tasks',{
	method: 'delete'
})
.then(() => {
	console.log('something');
})