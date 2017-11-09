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