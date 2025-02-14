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
	document.body.appendChild(theme);
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
	}
	else {
		theme.src = "/media/img/moon.svg" 
		document.documentElement.style.cssText = "--l0-bg-color: #000000; --l1-bg-color: #232323; --main-text-color: #ffffff; --faded-text-color: #373737"
	}
}