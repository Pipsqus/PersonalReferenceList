function generate_random_number(max) {
    return Math.floor(Math.random() * max);
}

current_randomization_choice = "classes";

function set_randomizer_to_classes() {
	let menu_buttons = document.getElementsByClassName("menu_item");
	for (i=0; i < menu_buttons.length; i++) {
		menu_buttons[i].style.filter = "brightness(100%)";
		menu_buttons[i].style.border = "0";
	}
	document.getElementById("button_classes").style.filter = "brightness(130%)";
	document.getElementById("button_classes").style.border = "3px solid";
	
	current_randomization_choice = "classes";
	
	// reinitialize partyContainer since the randomization selection changed
	let party_container_array = document.getElementsByClassName("party-container");
	for (i=0; i < party_container_array.length; i++) {
		party_container_array[i].innerHTML = "";
	}
	
	let game_list_div = document.getElementsByClassName("game_list")[0].children;
		for (let i=0; i < game_list_div.length; i++) {
			game_list_div[i].classList.remove("hidden");
		};
}
function set_randomizer_to_companions() {
	let menu_buttons = document.getElementsByClassName("menu_item");
	for (i=0; i < menu_buttons.length; i++) {
		menu_buttons[i].style.filter = "brightness(100%)";
		menu_buttons[i].style.border = "0";
	}
	document.getElementById("button_companions").style.filter = "brightness(130%)";
	document.getElementById("button_companions").style.border = "3px solid";
	
	current_randomization_choice = "companions";
	
	// reinitialize partyContainer since the randomization selection changed
	let party_container_array = document.getElementsByClassName("party-container");
	for (i=0; i < party_container_array.length; i++) {
		party_container_array[i].innerHTML = "";
	}
	
	let game_list_div = document.getElementsByClassName("game_list")[0].children;
		for (let i=0; i < game_list_div.length; i++) {
			game_list_div[i].classList.remove("hidden");
		};
}

function run_randomization_function(data_object, button_element) {
	if (current_randomization_choice == "classes") {
		generate_random_party_classes(data_object, button_element);
	} else if (current_randomization_choice == "companions") {
		generate_random_party_companions(data_object, button_element);
	}
};

function generate_random_party_classes(data_object, button_element) {

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
		partyContainer.classList.add("party_container");
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
					generate_random_party_classes(data_object, button_element)
					return
				}
				break;
		  	case "no-repeat-classes":
			  	if (already_selected_classes.includes(selected_class)) {
						generate_random_party_classes(data_object, button_element)
						return
					};
				break;
		  	case "no-repeat-groups":
				if (already_selected_groups.includes(selected_group)) {
						generate_random_party_classes(data_object, button_element)
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
		
	
	for (i=0; i<current_party.length; i++) {
		element_to_append = document.createElement("div");
		element_to_append.classList.add("party_element");
		element_to_append.textContent += `${current_party[i]}`;
		partyContainer.prepend(element_to_append);
		if (generate_random_number(10) < (multiclass_chance/10)) {
			if (multiclass_granted < multiclass_maxTotal) {
				let green_check_multiclass = document.createElement("img");
				green_check_multiclass.src = "green_check.png"
				element_to_append.appendChild(green_check_multiclass);
			}
			multiclass_granted += 1;
		}
		if (i == (0)) {
			const hr = document.createElement("hr");
			element_to_append.insertAdjacentElement("afterend", hr);
		}
	}
}


function generate_random_party_companions(data_object, button_element) {
	let number_party_members = data_object.number_party_members
	let companion_options = data_object.companion_options
		
	let decision_string = "";
	let current_party = [];
	let already_selected_companions = [];
		
	// partyContainer to hold the list of characters
	let partyContainer = button_element.nextElementSibling;
	if (!partyContainer || !partyContainer.classList.contains("party-container")) {
		partyContainer = document.createElement("div");
		partyContainer.id = "party_container";
		button_element.insertAdjacentElement("afterend", partyContainer);
		j = document.createElement("span");
	}
}
