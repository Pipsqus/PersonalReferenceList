function generate_random_number(max) {
    return Math.floor(Math.random() * max);
}

function generate_random_party(data_object, button_element) {

	let number_party_members = data_object.number_party_members
	let multiclass_chance = data_object.multiclass_chance
	let multiclass_maxTotal = data_object.multiclass_maxTotal
	let has_subclasses = data_object.has_subclasses
	let character_options = data_object.character_options
		
	let multiclass_granted = 0;
	let decision_string = "";
	let current_party = [];
	let already_selected_groups = [];
	let already_selected_classes = [];
	let already_selected_subclasses = [];
	let subclass_groupings = Object.entries(character_options);
		
	// partyContainer to hold the list of characters
	let partyContainer = button_element.nextElementSibling;
	if (!partyContainer || !partyContainer.classList.contains("party-container")) {
		partyContainer = document.createElement("div");
		partyContainer.classList.add("party-container");
		button_element.insertAdjacentElement("afterend", partyContainer);
		j = document.createElement("span");
	}
	
	var error_divs = document.getElementsByClassName("error");
	while(error_divs.length > 0){
        error_divs[0].parentNode.removeChild(error_divs[0]);
    }

	
		
	for (let i=0; i<number_party_members; i++) {
		let selected_group = subclass_groupings[generate_random_number(subclass_groupings.length)]
		let selected_group_object = selected_group[1]
		let selected_group_array = Object.entries(selected_group_object);
		
		let selected_class_array = selected_group_array[generate_random_number(selected_group_array.length)]
		let selected_class = selected_class_array[0];
		
		if (has_subclasses) {
			var selected_subclass = selected_class_array[1][generate_random_number(selected_class_array[1].length)];
		} 
		
		
		switch (document.getElementById("exclusion-criteria").value) {
		  	case "no-repeat-subclasses":
		  		if (!has_subclasses) {
					partyContainer.innerHTML = "";
					error_no_subclasses_div = document.createElement("div");
					error_message = "This game doesn't support subclasses";
					error_no_subclasses_div.textContent += `${error_message}`;
					error_no_subclasses_div.classList.add("error");
					partyContainer.append(error_no_subclasses_div);
					return
				} else if (already_selected_subclasses.includes(selected_subclass))
				{
					generate_random_party(data_object, button_element)
					return
				}
				break;
		  	case "no-repeat-classes":
			  	if (already_selected_classes.includes(selected_class)) {
						generate_random_party(data_object, button_element)
						return
					};
				break;
		  	case "no-repeat-groups":
				if (already_selected_groups.includes(selected_group)) {
						generate_random_party(data_object, button_element)
						return
				}
				break;
			case "any":
				break;
		}
		
		if (!has_subclasses) {
			decision_string = selected_class + " ";
		} else {
			decision_string = selected_class.toUpperCase() + " - " + selected_subclass + " ";
			already_selected_subclasses.push(selected_subclass);
		}
		current_party.push(decision_string);
		already_selected_classes.push(selected_class);
		already_selected_groups.push(selected_group);
	}
		
	
	for (element in current_party) {
		element_to_append = document.createElement("div");
		element_to_append.textContent += `${current_party[element]}`;
		element_to_append.classList.add("party_element");
		partyContainer.prepend(element_to_append);
		if (generate_random_number(10) < (multiclass_chance/10)) {
			if (multiclass_granted < multiclass_maxTotal) {
				let green_check_multiclass = document.createElement("img");
				green_check_multiclass.src = "green_check.png"
				element_to_append.appendChild(green_check_multiclass);
			}
			multiclass_granted += 1;
		}
	}
	
	const hr = document.createElement("hr");
	element_to_append.insertAdjacentElement("beforebegin", hr);

	
}


document.getElementById("bg3").addEventListener('click', function() {
    generate_random_party(bg3_data, this);
});

document.getElementById("sunderfolk").addEventListener('click', function() {
    generate_random_party(sunderfolk_data, this);
});

