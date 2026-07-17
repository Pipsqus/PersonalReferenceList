function set_randomizer_to_companions() {
	let menu_buttons = document.getElementsByClassName("menu_item");
	for (i=0; i < menu_buttons.length; i++) {
		menu_buttons[i].style.filter = "brightness(100%)";
		menu_buttons[i].style.border = "0";
	}
	document.getElementById("button_companions").style.filter = "brightness(130%)";
	document.getElementById("button_companions").style.border = "4px solid";
	
	current_randomization_choice = "companions";
	
	show_all_games();
		
	exclusion_criteria_hide();
	
	party_container_reinitialize();
};


function generate_random_party_companions(data_object, button_element) {
	let companions_to_roll = data_object.companions_to_roll
	let companion_options = data_object.companion_options
		
	let decision_string = "";
	let current_party = [];
	let already_selected_companions = [];
		
	// partyContainer to hold the list of characters
	let partyContainer = button_element.nextElementSibling;
	partyContainer = document.createElement("div");
	partyContainer.classList.add("party_container");
	button_element.insertAdjacentElement("afterend", partyContainer);
	j = document.createElement("span");
	
	var error_divs = document.getElementsByClassName("error");
	while(error_divs.length > 0){
        error_divs[0].parentNode.removeChild(error_divs[0]);
    }

	if (!companion_options) {
					partyContainer.innerHTML = "";
					error_no_subclasses_div = document.createElement("div");
					error_message = "This game doesn't support companions";
					error_no_subclasses_div.textContent += `${error_message}`;
					error_no_subclasses_div.classList.add("error");
					partyContainer.append(error_no_subclasses_div);
					return 
	}

	for (let i=0; i<companions_to_roll; i++) {
		let selected_companion = companion_options[generate_random_number(companion_options.length)]
		
		if (already_selected_companions.includes(selected_companion))
			{
				generate_random_party_companions(data_object, button_element)
				return
			}
				
		decision_string = selected_companion + " ";
		
		current_party.push(decision_string);
		already_selected_companions.push(selected_companion);
	}
	
	for (i=0; i<current_party.length; i++) {
		element_to_append = document.createElement("div");
		element_to_append.classList.add("party_element");
		element_to_append.textContent += `${current_party[i]}`;
		partyContainer.prepend(element_to_append);
	
		if (i == (0)) {
			const hr = document.createElement("hr");
			element_to_append.insertAdjacentElement("afterend", hr);
		}
	}
};
