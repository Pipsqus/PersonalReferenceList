function sunderfolk_getData() {
	const number_party_members = 4;

	const multiclass_chance = 0;
	const multiclass_maxTotal = 0;

	const character_options = {
		caster_arcane : {
			Arcanist : 
				[""],
			Pyromancer : 
				[""]
		},
		caster_divine : {
			Bard : 
				[""]
		},
		fighters_basic : {
			Berserker : 
				[""],
			Vanguard : 
				[""]
		},
		fighters_divine : {
			Ranger : 
				[""],
			Rogue : 
				[""]
		}
	};
	
	return {
		number_party_members, 
		multiclass_chance,
		multiclass_maxTotal,
		character_options
	}
}

