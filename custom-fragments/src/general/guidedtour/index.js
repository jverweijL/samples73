var editing = !!document.getElementsByClassName('page-editor').length;
var element = fragmentElement.getElementsByClassName("edit-frag")[0];

if (editing) {
    // do whatever is needed
	element.classList.remove("invisible");
} else {
		element.classList.add("invisible");
    if (configuration.runOnce && document.cookie.includes(fragmentElement.id + "-guidedtour=true")) {
        // already ran before
    } else {
        introJs().setOptions({
            steps: [{
                intro: "Welcome to the guided tour. "
            },{
                intro: "We can do some intro here or ..."
            }, {
                element: document.querySelector('#upperHeader > div > div > div.autofit-col.personal-bar-container > button'),
                intro: "Click here to login!"
						},{
							element: document.querySelector('#lowerHeader > div > a.logo.custom-logo.align-items-center.d-md-flex.d-none.logo-md.mx-2 > img'),
                intro: "Look at this fantastic logo up here!"							
            },{
							element: document.querySelector('#p_p_id_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_'),
                intro: "This is the main menu. Matching the page hierarchy. But you can also create decoupled menu's."							
            },{
                intro: "You are done"
            }]
        }).oncomplete(function() {
					document.cookie = fragmentElement.id + "-guidedtour=true; expires=Thu, 18 Dec 2037 12:00:00 UTC";
  
}).start();
    }
}
