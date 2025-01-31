document.addEventListener('DOMContentLoaded', function() {
  	const arrayOfLinks = document.querySelectorAll("a");


	arrayOfLinks.forEach((link) => {
		let href = link.href;
		let faviconUrl = href + "/favicon.ico";
		let favicon = document.createElement("img");
		
		favicon.src = faviconUrl;
		favicon.alt = "";
		favicon.width = 16;
		favicon.height = 16;
		
		link.appendChild(favicon);
	});

});

