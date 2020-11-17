var editing = !!document.getElementsByClassName('has-edit-mode-menu').length;

if (!editing) {
	if (document.cookie.includes("consent=true")) {
		var element = document.getElementById("cookieconsent");
		element.classList.add("d-none");
	}
}