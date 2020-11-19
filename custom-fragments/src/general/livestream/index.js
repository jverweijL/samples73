var editing = !!document.getElementsByClassName('page-editor').length;
var element = fragmentElement.getElementsByClassName("edit-frag")[0];

if (editing) {
  element.classList.remove("invisible");
} else {
  element.classList.add("invisible");
}