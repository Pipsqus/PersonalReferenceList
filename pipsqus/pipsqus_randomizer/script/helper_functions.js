function exclusion_criteria_hide() {
	let exclusion_criteria_options = document.getElementById("exclusion_criteria_div").children;
	for (let i=0; i < exclusion_criteria_options.length; i++) {
		exclusion_criteria_options[i].classList.add("hidden");
	};
};

function exclusion_criteria_display(parameter_to_randomize) {
	let current_exclusion_selection = "criteria_" + parameter_to_randomize;
	document.getElementById(current_exclusion_selection).classList.remove("hidden")
};

function party_container_reinitialize() {
	let party_container_array = document.getElementsByClassName("party_container");
	for (i=0; i < party_container_array.length; i++) {
		party_container_array[i].innerHTML = "";
	}
};

function generate_random_number(max) {
    return Math.floor(Math.random() * max);
};

function show_all_games() {	
	let game_list_div = document.getElementsByClassName("game_list")[0].children;
	for (let i=0; i < game_list_div.length; i++) {
		game_list_div[i].classList.remove("hidden");
	};
}


