function generate_random_number(max) {
    return Math.floor(Math.random() * max);
}

function generate_random_party(number_party_members) {
	
	let multiclass_granted = 0;
	let decision_string = "";
	let current_party = [];
	let already_selected_subclasses = [];
	let subclass_groupings = Object.entries(subclasses);
		
	for (let i=0; i<number_party_members; i++) {
		let selected_group = subclass_groupings[generate_random_number(subclass_groupings.length)]
		let selected_group_object = selected_group[1]
		let selected_group_array = Object.entries(selected_group_object);
		
		let selected_class_array = selected_group_array[generate_random_number(selected_group_array.length)]
		let selected_class = selected_class_array[0];
		let selected_subclass = selected_class_array[1][generate_random_number(selected_class_array[1].length)]
		
		if (already_selected_subclasses.includes(selected_subclass)) {
			generate_random_party(number_party_members)
			return			
		}
		
		decision_string = selected_class.toUpperCase() + " - " + selected_subclass + " ";
		current_party.push(decision_string)
		already_selected_subclasses.push(selected_subclass);
	}
	
	for (element in current_party) {
		element_to_append = document.createElement('div');
		element_to_append.textContent += `${current_party[element]}`;
		demo_div.append(element_to_append);
		if (generate_random_number(10) < (chance_to_multiclass/10)) {
			if (multiclass_granted < 2) {
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
	generate_random_party(number_party_members)
})
