
var deleteTest = function(){
	var id = $(event.target).closest('tr').attr('id');
 	var test = $(event.target).closest('tr');

	$.ajax({
		url: '/api/tests/' + id,
		method: 'DELETE',
	}).done(function(){
		console.log('test has been deleted!');
		test.remove();
	});
};

$('.deleteTest').on('click', deleteTest);

var addTest = function(event){
	event.preventDefault();
	
	var name = $('#name').val();
	var age = $('#date').val();
	var $table = $('#testTable');

	var test = {};
	test.name = name;
	test.date = date;

	if(name && date){
		$.ajax({
			url: ('/api/tests'),
			method: 'POST',
			data: test
		}).done(function(data){
			console.log('TEST POSTED', data);
			$table.append('<tr id="' + data._id + '">\
							<td>' + data.name + '</td>\
							<td>' + data.date + '</td>\
							<td><button type="button" class="btn btn-warning deleteTest">Delete Test</button></td>\
						</tr>'
						 );
			$('.deleteTest').on('click', deleteTest);
			$('#name').val('');
			$('#date').val('');

		});
	}
};

$('#addTest').on('click', addTest);
	
