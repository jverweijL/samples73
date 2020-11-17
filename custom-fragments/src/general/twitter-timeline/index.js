var editing = !!document.getElementsByClassName('fragments-editor').length;

if (editing) {
  $(fragmentElement.getElementsByClassName("edit")).removeClass("invisible");
} else {
  $(fragmentElement.getElementsByClassName("edit")).addClass("invisible");
}