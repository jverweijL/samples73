const content = fragmentElement.querySelector('.targetgroup');
document.cookie = "targetgroup=" + configuration.targetgroupApplied + "; expires=Thu, 7 Dec 2035 12:00:00 UTC; path=/";

var editing = !!document.getElementsByClassName('fragments-editor').length;
var fragment = $(fragmentElement);
var targetgroup = fragment.find('.targetgroup').first();

if (editing) {
  console.log("in edit mode");
  targetgroup.addClass('fragment-edit');
} else {
  targetgroup.removeClass('fragment-edit');
}