var editing = !!document.getElementsByClassName('fragments-editor').length;

if (editing) {
  console.log("In editing mode... time to reveal text");
  $("lfr-editable[id$=tweettext]").first().css("display","block");
} else {
  console.log("setting new url...");
  msg = $('#twitterlink').next().text();
  fragmentElement.querySelector('#twitterlink').setAttribute("href", "https://twitter.com/intent/tweet?text=" + msg + "&tw_p=tweetbutton");
  //https://twitter.com/intent/tweet?text=New+Learning+Path+available&tw_p=tweetbutton&url=https://liferay-omnichannel-demo-72.liferay.org.es/web/intranet-new/blogs/-/blogs/new-learning-path-available
}