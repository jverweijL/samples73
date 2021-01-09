fragmentElement.getElementsByClassName("code2-icon")[0].addEventListener("click", function() {
	var code = fragmentElement.getElementsByClassName("code2-fragment")[0];
	var range = document.createRange();
  range.selectNode(code);

  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
	
	
});