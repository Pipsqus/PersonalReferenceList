function bg3_getData() {
	const number_party_members = 4;

	const multiclass_chance = 55;
	const multiclass_maxTotal = 2;

	const character_options = {
		caster_arcane : {
			Warlock : 
				["The Fiend", 
				"The Great Old One", 
				"The Archfey", 
				"The Hexblade"],
			Wizard : 
				["Abjuration School", 
				"Evocation School", 
				"Necromancy School", 
				"Conjuration School", 
				"Enchantment School", 
				"Divination School", 
				"Illusion School", 
				"Transmutation School", 
				"Bladesinging"],
			Sorcerer : 
				["Wild Magic", 
				"Draconic Bloodline", 
				"Storm Sorcery", 
				"Shadow Magic"]
		},
		caster_divine : {
			Bard : 
				["College of Lore", 
				"College of Valour", 
				"College of Swords", 
				"College of Glamour"],
			Cleric : 
				["Life Domain", 
				"Light Domain", 
				"Trickery Domain", 
				"Knowledge Domain", 
				"Nature Domain", 
				"Tempest Domain", 
				"War Domain", 
				"Death Domain"],
			Druid : 
				["Circle of the Land", 
				"Circle of the Moon", 
				"Circle of the Spores", 
				"Circle of the Stars"]
		},
		fighters_basic : {
			Fighter : 
				["Battle Master", 
				"Eldritch Knight", 
				"Champion", 
				"Arcane Archer"],
			Barbarian : 
				["Berserker", 
				"Wild Magic", 
				"Wildheart", 
				"Giant"],
			Rogue : 
				["Thief", 
				"Arcane Trickster", 
				"Assassin", 
				"Swashbuckler"]
		},
		fighters_divine : {
			Paladin : 
				["Oath of the Ancients", 
				"Oath of Devotion", 
				"Oath of Vengeance", 
				"Oath of the Crown", 
				"Oathbreaker"],
			Ranger : 
				["Hunter", 
				"Beast Master", 
				"Gloom Stalker", 
				"Swarmkeeper"],
			Monk : 
				["Way of the Four Elements", 
				"Way of the Open Hand", 
				"Way of Shadow", 
				"Way of the Drunken Master"]
		}
	};
	
	return {
		number_party_members, 
		multiclass_chance,
		multiclass_maxTotal,
		character_options
	}
}

