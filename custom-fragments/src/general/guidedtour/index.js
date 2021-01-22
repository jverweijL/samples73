var editing = !!document.getElementsByClassName('page-editor').length;
var element = fragmentElement.getElementsByClassName("edit-frag")[0];

if (editing) {
    // do whatever is needed
	element.classList.remove("invisible");
} else {
		element.classList.add("invisible");
    if (configuration.runOnce) {
        // already ran before
    } else {
        introJs().setOptions({
            steps: [{
                intro: "Hello world!"
            }, {
                element: document.querySelector('span.sign-in'),
                intro: "Click here to login!"
            },{
                intro: "You are done"
            }]
        }).start();
    }
}