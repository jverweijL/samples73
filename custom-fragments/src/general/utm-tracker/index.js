var editing = !!document.getElementsByClassName('fragments-editor').length;

//console.log("id: " + $(fragmentElement).attr("id"));

if (editing) {
  console.log("edit mode");
  $(fragmentElement).removeClass("invisible");
} else {
  var regex = /[\?&]utm_.+?=([\s-_\w_]+)/g;
  var utmParams = window.location.href.match(regex);
  for (i = 0; i < utmParams.length; i++) { 
    document.cookie = utmParams[i].substring(1);
  }
  console.log( "UTM ready!" );
  $(fragmentElement).addClass("invisible");
}