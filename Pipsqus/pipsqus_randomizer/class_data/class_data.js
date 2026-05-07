const games_array = ["bg3", "sunderfolk", "solasta", "deadfire"];



let solasta_data = {
	number_party_members : 4,

	multiclass_chance : 55,
	multiclass_maxTotal : 0,
	
	has_subclasses : true,

	character_options : {
		caster_arcane : {
			"Artificer" : 
				["Armorer",
				"Artillerist",
				"Battle Smith",
				"Grenadier",
				"Vitriolist",
				"Vivisectionist"],
			"Sorcerer" : 
				["Child of the Rift",
				"Divine Soul",
				"Draconic Bloodline",
				"Field Manipulator",
				"Forceblade",
				"Haunted Soul",
				"Mana Painter",
				"Psion",
				"Sorr-Akkath",
				"Wild Magic"],
			"Warlock" : 
				["The Archfey",
				"The Celestial",
				"The Eldritch Surge",
				"The Elementalist",
				"The Fiend",
				"The Hexblade",
				"The Hive",
				"The Moonlit",
				"The Mountain",
				"The Riftwalker",
				"The Timekeeper",
				"The Tree"],
			"Wizard" : 
				["Arcane Fighter",
				"Bladesinger",
				"Courtmage",
				"Deadmaster",
				"Graviturgist",
				"Greenmage",
				"Loremaster",
				"Shock Arcanist",
				"Spellmaster",
				"War Magic"],
		},
		caster_divine : {
			"Bard" : 
				["College of Elegance",
				"College of Eloquence",
				"College of Heroism",
				"College of Hope",
				"College of Life",
				"College of Lore",
				"College of Swords",
				"College of Thespian",
				"College of Traditions",
				"College of Valor"],
			"Cleric" : 
				["Battle",
				"Defiler",
				"Elemental - Fire",
				"Elemental - Ice", 
				"Elemental - Lightning",
				"Forge",
				"Insight",
				"Law",
				"Life",
				"Mischief",
				"Nature", 
				"Oblivion",
				"Sun",
				"Tempest"],
			"Druid" : 
				["Circle of Balance",
				"Circle of the Ancient Forest",
				"Circle of the Eternal Grove",
				"Circle of the Forest Guardian",
				"Circle of the Kindred Spirit",
				"Circle of the Land",
				"Circle of the Moon",
				"Circle of the Stars",
				"Circle of the Wildfire",
				"Circle of the Winds"],
		},
		fighters_basic : {
			"Barbarian" : 
				["Path of the Battlerager",
				"Path of the Beast",
				"Path of the Berserker",
				"Path of the Claw",
				"Path of the Elements",
				"Path of the Light",
				"Path of the Magebane",
				"Path of the Ravager",
				"Path of the Reaver",
				"Path of the Savagery",
				"Path of the Stone",
				"Path of the Totem Warrior",
				"Path of the Wild Magic",
				"Path of the Yeoman"],
			"Fighter" : 
				["Arcane Archer",
				"Banneret",
				"Battle Master",
				"Champion",
				"Commander",
				"Eldritch Knight",
				"Guardian",
				"Mountaineer",
				"Psi Warrior",
				"Spellblade",
				"Warlord",
				"Weapon Master"],
			"Rogue" : 
				["Acrobat",
				"Arcane Scoundrel",
				"Blade Caller",
				"Darkweaver",
				"Duelist",
				"Hoodlum",
				"Opportunist",
				"Raven",
				"Shadowcaster",
				"Shadowdancer",
				"Slayer",
				"Thief"],
		},
		fighters_divine : {
			"Paladin" : 
				["Oath of Altruism",
				"Oath of Ancients",
				"Oath of Demon Hunter",
				"Oath of Devotion",
				"Oath of Dread",
				"Oath of Hatred",
				"Oath of Judgement",
				"Oath of the Motherland",
				"Oath of Thunder",
				"Oath of Tirmar"],
			"Monk" : 
				["Way of Discordance",
				"Way of Dragon",
				"Way of Freedom",
				"Way of Light",
				"Way of Shadow",
				"Way of Storm Soul",
				"Way of Survival",
				"Way of the Open Hand",
				"Way of Weal and Woe",
				"Way of Zen Archery"],
			"Ranger" : 
				["Arcanist",
				"Fey Wanderer",
				"Gloom Stalker",
				"Hellwalker",
				"Hunter",
				"Lightbearer",
				"Marksman",
				"Shadowtamer",
				"Sky Warrior",
				"Survivalist",
				"Swift Blade",
				"Wildmaster"],
		}
	}
};






let bg3_data = {
	number_party_members : 4,

	multiclass_chance : 55,
	multiclass_maxTotal : 2,
	
	has_subclasses : true,

	character_options : {
		caster_arcane : {
			"Warlock" : 
				["The Fiend", 
				"The Great Old One", 
				"The Archfey", 
				"The Hexblade"],
			"Wizard" : 
				["Abjuration School", 
				"Evocation School", 
				"Necromancy School", 
				"Conjuration School", 
				"Enchantment School", 
				"Divination School", 
				"Illusion School", 
				"Transmutation School", 
				"Bladesinging"],
			"Sorcerer" : 
				["Wild Magic", 
				"Draconic Bloodline", 
				"Storm Sorcery", 
				"Shadow Magic"]
		},
		caster_divine : {
			"Bard" : 
				["College of Lore", 
				"College of Valour", 
				"College of Swords", 
				"College of Glamour"],
			"Cleric" : 
				["Life Domain", 
				"Light Domain", 
				"Trickery Domain", 
				"Knowledge Domain", 
				"Nature Domain", 
				"Tempest Domain", 
				"War Domain", 
				"Death Domain"],
			"Druid" : 
				["Circle of the Land", 
				"Circle of the Moon", 
				"Circle of the Spores", 
				"Circle of the Stars"]
		},
		fighters_basic : {
			"Fighter" : 
				["Battle Master", 
				"Eldritch Knight", 
				"Champion", 
				"Arcane Archer"],
			"Barbarian" : 
				["Berserker", 
				"Wild Magic", 
				"Wildheart", 
				"Giant"],
			"Rogue" : 
				["Thief", 
				"Arcane Trickster", 
				"Assassin", 
				"Swashbuckler"]
		},
		fighters_divine : {
			"Paladin" : 
				["Oath of the Ancients", 
				"Oath of Devotion", 
				"Oath of Vengeance", 
				"Oath of the Crown", 
				"Oathbreaker"],
			"Ranger" : 
				["Hunter", 
				"Beast Master", 
				"Gloom Stalker", 
				"Swarmkeeper"],
			"Monk" : 
				["Way of the Four Elements", 
				"Way of the Open Hand", 
				"Way of Shadow", 
				"Way of the Drunken Master"]
		}
	}
};





let sunderfolk_data = {
	number_party_members : 4,

	multiclass_chance : 0,
	multiclass_maxTotal : 0,
	
	has_subclasses : false,

	character_options : {
		caster_arcane : {
			"Arcanist" : 
				[""],
			"Pyromancer" : 
				[""]
		},
		caster_divine : {
			"Bard" : 
				[""]
		},
		fighters_basic : {
			"Berserker" : 
				[""],
			"Vanguard" : 
				[""]
		},
		fighters_divine : {
			"Ranger" : 
				[""],
			"Rogue" : 
				[""]
		}
	}
};








