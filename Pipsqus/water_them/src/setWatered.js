function iHaveWatered(day) {
	const clickedDay = "element" + day;
	const clickedGridElement = document.getElementById(clickedDay);

	if (wateredDays[day]) {
		// notice that even if you defined wateredDays, wateredDays[n] is considered falsy if = 0, so this works without extra checks
		wateredDays[day] = (wateredDays[day] + 1) % 2;
		clickedGridElement.classList.remove("alreadyWatered");
	}
	else {
		wateredDays[day] = 1;
		clickedGridElement.classList.add("alreadyWatered");
	}
	
	localStorage.setItem("wateredDays" ,JSON.stringify(wateredDays));
}

function resetWateredDays() {
	localStorage.clear();
	for (var i = 1; i < 33; i++) {
		const idString = "element" + i;
		if (document.getElementById(idString)) {
			document.getElementById(idString).classList.remove("alreadyWatered")
		}
	}
	window.location.reload();
}

var currentDate = new Date();
var currentMonth = currentDate.getMonth()
// 30 giorni ha Novembre, con April, Giugno e Settembre. Di 28 ce n'è uno; tutti gli altri ne han 31
var hasMonth30Days = /[3|5|8|10]/;
if (currentMonth == 1) {
	for (var i = 1; i <= 28; i++) {
		new dayDiv(i);
	}
} else if (hasMonth30Days.test(currentMonth.toString())) {
	for (var i = 1; i <= 30; i++) {
		new dayDiv(i);
	}
} else {
	for (var i = 1; i <= 31; i++) {
		new dayDiv(i);
	}
}

