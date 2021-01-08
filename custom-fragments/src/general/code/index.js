fragmentElement.getElementsByClassName("copybutton")[0].addEventListener("click", function() {
	var copyText = fragmentElement.getElementsByClassName("code")[0];
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
	
  fragmentElement.getElementsByClassName("copybutton")[0].textContent = "copied!";
  copyText.setSelectionRange(0, 0);
	document.activeElement.blur();
	setTimeout(function(){ fragmentElement.getElementsByClassName("copybutton")[0].textContent = "copy"; }, 3000);
});