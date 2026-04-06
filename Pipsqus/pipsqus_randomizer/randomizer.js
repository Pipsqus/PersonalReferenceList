function generate_random_number(max) {
    return Math.floor(Math.random() * max);
}

function generate_random_party(function_generating) {

	const {
		number_party_members, 
		multiclass_chance, 
		multiclass_maxTotal,
		character_options
	} = function_generating(); 
	// gives direct access to these variables; no need to reference any object from here
		
	let multiclass_granted = 0;
	let decision_string = "";
	let current_party = [];
	let already_selected_subclasses = [];
	let already_selected_classes = [];
	let already_selected_groups = [];
	let subclass_groupings = Object.entries(character_options);
		
	for (let i=0; i<number_party_members; i++) {
		let selected_group = subclass_groupings[generate_random_number(subclass_groupings.length)]
		let selected_group_object = selected_group[1]
		let selected_group_array = Object.entries(selected_group_object);
		
		let selected_class_array = selected_group_array[generate_random_number(selected_group_array.length)]
		let selected_class = selected_class_array[0];
		let selected_subclass = selected_class_array[1][generate_random_number(selected_class_array[1].length)];
		
		
		switch (document.getElementById("exclusion-criteria").value) {
		  	case "no-repeat-subclasses":
				if (already_selected_subclasses.includes(selected_subclass)) {
					generate_random_party(function_generating)
					return
				}
				break;
		  	case "no-repeat-classes":
			  	if (already_selected_classes.includes(selected_class)) {
						generate_random_party(function_generating)
						return
					};
				break;
		  	case "no-repeat-groups":
				if (already_selected_groups.includes(selected_group)) {
						generate_random_party(function_generating)
						return
				}
				break;
			case "any":
				break;
		}
		
		
		decision_string = selected_class.toUpperCase() + " - " + selected_subclass + " ";
		current_party.push(decision_string);
		already_selected_subclasses.push(selected_subclass);
		already_selected_classes.push(selected_class);
		already_selected_groups.push(selected_group);
	}
	
	for (element in current_party) {
		element_to_append = document.createElement('div');
		element_to_append.textContent += `${current_party[element]}`;
		demo_div.append(element_to_append);
		if (generate_random_number(10) < (multiclass_chance/10)) {
			if (multiclass_granted < multiclass_maxTotal) {
				let green_check_multiclass = document.createElement('img');
				green_check_multiclass.src = "green_check.png"
				element_to_append.appendChild(green_check_multiclass);
			}
			multiclass_granted += 1;
		}
	}
	
	demo_div.append(document.createElement('hr'));
}

document.getElementById("generate_fully_random").addEventListener('click', () => {
	let partyData;
	
	generate_random_party(bg3_getData)
})
