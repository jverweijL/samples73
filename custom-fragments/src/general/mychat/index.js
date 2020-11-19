function add_chatinline(){
  var hccid=46897571;
  var nt=document.createElement("script");
  nt.async=true;
  nt.src="https://mylivechat.com/chatinline.aspx?hccid="+hccid;
  var ct=document.getElementsByTagName("script")[0];
  ct.parentNode.insertBefore(nt,ct);
}
add_chatinline();