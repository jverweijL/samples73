var editing = !!document.getElementsByClassName('fragments-editor').length;

if (editing) {
}
else
{
  if (configuration.autoHide) {
  setTimeout(
		function() {
  		 $(fragmentElement).addClass("invisible");
		},
		5000
	);
  }
}