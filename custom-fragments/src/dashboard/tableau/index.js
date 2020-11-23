var editing = !!document.getElementsByClassName('page-editor').length;
var element = fragmentElement.getElementsByClassName("edit-frag")[0];

if (editing) {
  element.classList.remove("invisible");
} else {
  element.classList.add("invisible");
}

var divElement = fragmentElement.getElementsByClassName("tableauPlaceholder")[0];
var vizElement = divElement.getElementsByTagName('object')[0]; 
vizElement.style.width = '100%'; 
vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; 
var scriptElement = document.createElement('script'); 
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
vizElement.parentNode.insertBefore(scriptElement, vizElement);