function set_randomizer_to_everything() {
	let menu_buttons = document.getElementsByClassName("menu_item");
	for (i=0; i < menu_buttons.length; i++) {
		menu_buttons[i].style.filter = "brightness(100%)";
		menu_buttons[i].style.border = "0";
	}
	document.getElementById("button_everything").style.filter = "brightness(130%)";
	document.getElementById("button_everything").style.border = "4px solid";
	
	current_randomization_choice = "everything";
		
	let game_list_div = document.getElementsByClassName("game_list")[0].children;
	for (let i=0; i < game_list_div.length; i++) {
		game_list_div[i].classList.remove("hidden");
	};
	
	let exclusion_criteria_options = document.getElementById("exclusion_criteria_div").children;
	for (let i=0; i < exclusion_criteria_options.length; i++) {
		exclusion_criteria_options[i].classList.remove("hidden");
	};
	
	party_container_reinitialize(true);
};
