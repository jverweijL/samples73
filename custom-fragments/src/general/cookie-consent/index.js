var editing = !!document.getElementsByClassName('page-editor').length;

if (editing) {
  //element.classList.remove("invisible");
} else {
  //element.classList.add("invisible");
  if (document.cookie.includes("consent=true")) {
	var element = document.getElementById("cookieconsent");
	element.classList.add("d-none");
  }
}