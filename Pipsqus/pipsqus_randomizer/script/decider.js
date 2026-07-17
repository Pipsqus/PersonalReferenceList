function set_randomizer_to_parameter(parameter_to_randomize) {
	let menu_buttons = document.getElementsByClassName("menu_item");
	for (i=0; i < menu_buttons.length; i++) {
		menu_buttons[i].style.filter = "brightness(100%)";
		menu_buttons[i].style.border = "0";
	}
	
	let current_button = "button_" + parameter_to_randomize;
	document.getElementById(current_button).style.filter = "brightness(130%)";
	document.getElementById(current_button).style.border = "4px solid";
	
	current_randomization_choice = parameter_to_randomize;
	
	show_all_games();
		
	exclusion_criteria_hide();
	let current_criteria = "criteria_" + parameter_to_randomize;
	if (document.getElementById(current_criteria)) {
		exclusion_criteria_display(parameter_to_randomize);
	}
	
	party_container_reinitialize();
};


function run_randomization_function(data_object, button_element) {
	if (current_randomization_choice == "classes") {
		generate_random_party_classes(data_object, button_element);
	} else if (current_randomization_choice == "companions") {
		generate_random_party_companions(data_object, button_element);
	} else if (current_randomization_choice == "races") {
		generate_random_party_races(data_object, button_element);
	} else if (current_randomization_choice == "everything") {
		party_container_reinitialize(true);
		generate_random_party_races(data_object, button_element,);
		generate_random_party_companions(data_object, button_element);
		generate_random_party_classes(data_object, button_element);
	}
};

