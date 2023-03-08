toggle = {
	dark : 0,
	tableSort: 0,
};

function toggleDark() {
	document.body.classList.toggle("dark");
	toggle.dark = (toggle.dark + 1) % 2 
	if (toggle.dark == 0) {
		document.getElementById("toggle").innerHTML = "Light Mode";
	}
	else {
		document.getElementById("toggle").innerHTML = "Dark Mode";
	}
}
// check out mdn, table!
for (let table of document.querySelectorAll('table')) {
	for (let th of table.tHead.rows[0].cells) {
    		th.onclick = function(){
      		const tBody = table.tBodies[0];
		const rows = tBody.rows;
		for (let tr of rows) {
		        Array.prototype.slice.call(rows)
			.sort(function(tr1, tr2){
			const cellIndex = th.cellIndex;
			if (toggle.tableSort == 0) {
				let image1 = tr1.cells[cellIndex].querySelector('img');
				let image2 = tr2.cells[cellIndex].querySelector('img');
				if (image1 && image2) {
					return image1.src.localeCompare(image2.src);
				} else if (image1 &! image2) {
					return 1;
				} else if (!image1 && image2) {
					return -1;
				} else {
					return tr1.cells[cellIndex].textContent.localeCompare(tr2.cells[cellIndex].textContent) 
				}
			} else {
				let image1 = tr1.cells[cellIndex].querySelector('img');
				let image2 = tr2.cells[cellIndex].querySelector('img');
				if (image1 && image2) {
					return image2.src.localeCompare(image1.src);
				} else if (image1 &! image2) {
					return -1;
				} else if (!image1 && image2) {
					return 1;
				} else {
					return tr2.cells[cellIndex].textContent.localeCompare(tr1.cells[cellIndex].textContent) 
				}
			}
          })
          .forEach(function(tr){
            this.appendChild(this.removeChild(tr));
          }, tBody);
      }
		    toggle.tableSort = ((toggle.tableSort + 1) % 2);
    }
  }
}



