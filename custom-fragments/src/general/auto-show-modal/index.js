var editing = !!document.getElementsByClassName('fragments-editor').length;

if (editing) {
	console.log($(fragmentElement).parents('.fragment-entry-link-wrapper').first());
	var fragment = $(fragmentElement);
	
	fragment.parents('.fragment-entry-link-wrapper').first().attr('fragment-modal', 'true');
	
	var modal = fragment.find('.modal').first();
	
	var body = $('body');
	
	modal.on(
		'show.bs.modal',
		function(event) {
			console.log('show', event);
			
			body.addClass('fragment-modal-open');
		}
	);
	
	modal.on(
		'hide.bs.modal',
		function(event) {
			console.log('hide', event);
			
			body.removeClass('fragment-modal-open');
		}
	);

	fragment.find('.btn[data-dismiss="modal"]').first().attr('data-dismiss', 'none');
}
else {
	var modal = $(fragmentElement).find('.modal').first();
	
	setTimeout(
		function() {
			modal.modal();
		},
		3000
	);
}