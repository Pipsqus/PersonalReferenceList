function generate_random_party_races(data_object, button_element) {
	let races_to_roll = data_object.races_to_roll
	let races_options = data_object.races_options
		
	let decision_string = "";
	let current_party = [];
	let already_selected_races = [];
		
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
		let selected_race = races_options[generate_random_number(races_options.length)]
		
		if (already_selected_races.includes(selected_race))
			{
				generate_random_party_races(data_object, button_element)
				return
			}
				
		decision_string = selected_race + " ";
		
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
