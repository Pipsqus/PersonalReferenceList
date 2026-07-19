function generate_random_party_races(data_object, button_element) {
	let races_to_roll = data_object.races_to_roll
	let races_options = data_object.races_options
	let has_subraces = data_object.has_subraces
		
	let decision_string = "";
	let current_party = [];
	let already_selected_races = [];
	let already_selected_subraces = [];
	let race_options_entries = Object.entries(races_options);
		
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

	if (!races_options) {
					partyContainer.innerHTML = "";
					error_no_subclasses_div = document.createElement("div");
					error_message = "This game doesn't support races";
					error_no_subclasses_div.textContent += `${error_message}`;
					error_no_subclasses_div.classList.add("error");
					partyContainer.append(error_no_subclasses_div);
					return 
	}

	for (let i=0; i<races_to_roll; i++) {
		let selected_race_container = race_options_entries[generate_random_number(race_options_entries.length)]
		let selected_race = selected_race_container[0];
		
		if (has_subraces) {
			var selected_subrace = selected_race_container[1][generate_random_number(selected_race_container[1].length)];
		} 
		
		switch (document.getElementById("criteria_races").value) {
		  	case "no-repeat-subraces":
		  		if (!has_subraces) {
					partyContainer.innerHTML = "";
					error_no_subraces_div = document.createElement("div");
					error_message = "This game doesn't support subraces";
					error_no_subraces_div.textContent += `${error_message}`;
					error_no_subraces_div.classList.add("error");
					partyContainer.append(error_no_subraces_div);
					return
				} else if (already_selected_subraces.includes(selected_subrace))
				{
					generate_random_party_races(data_object, button_element)
					return
				}
				break;
		  	case "no-repeat-races":
			  	if (already_selected_races.includes(selected_race) || already_selected_subraces.includes(selected_subrace)) {
						generate_random_party_races(data_object, button_element)
						return
					};
				break;
			case "any":
				break;
		}
				
		if (!has_subraces || selected_subrace == "") {
			decision_string = selected_race.toUpperCase() + " ";
		} else {
			decision_string = selected_race.toUpperCase() + " - " + selected_subrace + " ";
			already_selected_subraces.push(selected_subrace);
		}
		
		
		current_party.push(decision_string);
		already_selected_races.push(selected_race);
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
