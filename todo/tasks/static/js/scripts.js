
$(document).ready(function() {
	// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
	var deleteBtn = $('.delete-btn')

	$(deleteBtn).on('click', function(e) {

		e.preventDefault();

		var delLink = $(this).attr('href');
		var result = confirm('Quer deletar essa tarefa?');

		if(result) {
			window.location.href = delLink;
		}

	});

});