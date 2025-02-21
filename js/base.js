let a = [];
let theme = document.createElement("img"); 


(function() {
	if (localStorage.getItem("isLight") == undefined) localStorage.setItem("isLight", "0")
	document.querySelectorAll('a[href]').forEach(l => {
		a.push([l.textContent, l.getAttribute('href')]);
		l.removeAttribute('href');
		l.addEventListener('click', () => openurl(l.textContent));
	});
	theme.setAttribute("id", "theme");
	theme.src = "/media/img/moon.svg"
	theme.addEventListener("click", () => {
		toggleTheme();
		getTheme();
	})
	if (window.location.href.endsWith("/pages/menu/plan.html")) document.getElementById("base").appendChild(theme);
	else document.getElementById("container").appendChild(theme);
	// else document.body.appendChild(theme);
	getTheme();
})();

function openurl(name) {
	a.forEach((obj) => {
		if (obj[0] == name) {
			window.location.href = obj[1];
		}
	});
}

function toggleTheme() {
	localStorage.setItem("isLight", localStorage.getItem("isLight") == "1" ? 0 : 1);
}

function getTheme() {
	if (localStorage.getItem("isLight") == 1) {
		theme.src = "/media/img/sun.svg" 
		document.documentElement.style.cssText = "--l0-bg-color: #ffffff; --l1-bg-color:#CCCCCC; --main-text-color: #000000; --faded-text-color: #AAAAAA"

		let loc = window.location.href;
		if (loc.endsWith("/pages/menu/plan.html"))    document.getElementById("plan").src = "../../media/img/plan.light.svg";
		else if (loc.endsWith("/pages/aboutme.html")) document.getElementById("pfp" ).src =    "../media/img/pfp.light.svg";
	}
	else {
		theme.src = "/media/img/moon.svg" 
		document.documentElement.style.cssText = "--l0-bg-color: #000000; --l1-bg-color: #232323; --main-text-color: #ffffff; --faded-text-color: #373737"

		let loc = window.location.href;
			 if (loc.endsWith("/pages/menu/plan.html")) document.getElementById("plan").src = "../../media/img/plan.dark.svg";
		else if (loc.endsWith("/pages/aboutme.html"))   document.getElementById("pfp").src =    "../media/img/pfp.dark.svg";
	}
}