function loadWateredDays() {
	if (localStorage.getItem("wateredDays") != null) { 
		wateredDays = JSON.parse(localStorage.getItem("wateredDays"))

		for (var k = 0; k < wateredDays.length; k++) {
			if (wateredDays[k] === 1) {
				let clickedDay = "element" + k;
				let clickedGridElement = document.getElementById(clickedDay);
				clickedGridElement.classList.add("alreadyWatered");
			}
		}
	}
	else {
		wateredDays = [] 
	}
}


class dayDiv {
	constructor(currentDay) {
		this.day = currentDay;
		this.addToDay();
	}

	addToDay() {
		const addToGrid = `<div class="gridElement" id="element${this.day}" onclick="iHaveWatered(${this.day})">${this.day}</div>`;

		const wrapper = document.getElementsByClassName('wrapper')[0];
		wrapper.insertAdjacentHTML('beforeend', addToGrid);
	}
}


