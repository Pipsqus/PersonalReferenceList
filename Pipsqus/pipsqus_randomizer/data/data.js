let solasta_data = {
	game_name : "solasta",
	classes_to_roll : 4,
	companions_to_roll : 0,
	races_to_roll : 4,

	multiclass_chance : 0,
	multiclass_maxTotal : 0,
	multiclass_options_to_grant: 0,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : true,

	companion_options : false,
	races_options : ["Human", "Elf", "Drow", "Half-Elf", "Half-Orc", "Halfling", "Dwarf", "Gnome", "Tiefling", "Githyanki", "Dragonborn"],
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
	game_name : "bg3",
	classes_to_roll : 4,
	companions_to_roll : 3,
	races_to_roll : 1,

	multiclass_chance : 55,
	multiclass_maxTotal : 2,
	multiclass_options_to_grant: 3,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : true,
	
	companion_options : ["Astarion", "Gale", "Karlach", "Lae\'zel", "Shadowheart", "Wyll", "Halsin", "Jaheira", "Minsc", "Minthara"],
	races_options : ["Human", "Elf", "Drow", "Half-Elf", "Half-Orc", "Halfling", "Dwarf", "Gnome", "Tiefling", "Githyanki", "Dragonborn"],
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
	game_name : "sunderfolk",
	classes_to_roll : 4,
	companions_to_roll : 0,
	races_to_roll : 0,

	multiclass_chance : 0,
	multiclass_maxTotal : 0,
	multiclass_options_to_grant: 0,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : false,
	
	companion_options : [],
	races_options : [],
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





let roguetrader_data = {
	game_name : "roguetrader",
	classes_to_roll : 5,
	companions_to_roll : 4,
	races_to_roll : 1,

	multiclass_chance : 0,
	multiclass_maxTotal : 0,
	multiclass_options_to_grant: 0,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : true,
	companion_options : ["Abelard", "Idira", "Argenta", "Cassia", "Pasqal", "Heinrix", "Jae", "Yrliet", "Marazhai", "Ulfar", "Kibellah", "Solomorne", "Eogunn"],
	races_options : ["Astra Militarum Commander", "Commissar", "Crime Lord", "Ministorum Priest", "Navy Officer", "Noble", "Sanctioned Psyker - Biomancer", "Sanctioned Psyker - Diviner", "Sanctioned Psyker - Pyromancer", "Sanctioned Psyker - Sanctic", "Sanctioned Psyker - Telepath"],
	character_options : {
		frontline : {
			"Bladedancer" : 
				["Arch-Militant",
				"Assassin",
				"Bounty Hunter",
				"Executioner",
				"Grand Strategist",
				"Master Tactician",
				"Overseer",
				"Vanguard"],
			"Warrior" : 
				["Arch-Militant",
				"Assassin",
				"Bounty Hunter",
				"Executioner",
				"Grand Strategist",
				"Master Tactician",
				"Overseer",
				"Vanguard"],
		},
		support : {
			"Officer" : 
				["Arch-Militant",
				"Assassin",
				"Bounty Hunter",
				"Executioner",
				"Grand Strategist",
				"Master Tactician",
				"Overseer",
				"Vanguard"],
			"Operative" : 
				["Arch-Militant",
				"Assassin",
				"Bounty Hunter",
				"Executioner",
				"Grand Strategist",
				"Master Tactician",
				"Overseer",
				"Vanguard"],
				
		},
		damage : {
			"Soldier" : 
				["Arch-Militant",
				"Assassin",
				"Bounty Hunter",
				"Executioner",
				"Grand Strategist",
				"Master Tactician",
				"Overseer",
				"Vanguard"],
		},
	}
};

let pillars1_data = {
	game_name : "pillars1",
	classes_to_roll : 1,
	companions_to_roll : 3,
	races_to_roll : 1,

	multiclass_chance : 0,
	multiclass_maxTotal : 0,
	multiclass_options_to_grant: 0,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : false,
	
	companion_options : ["Aloth", "Edér", "Kana", "Durance", "Sagani", "Grieving Mother", "Hiravias", "Pallegina", "Devil of Caroc", "Zahua", "Maneha"],
	races_options : ["Aumaua", "Dwarf", "Elf", "Godlike", "Human", "Orlan"],
	character_options : {
		all_classes : {
			"Barbarian" : 
				[""],
			"Chanter" :
				[""],
			"Cipher" :
				[""],
			"Druid" :
				[""],
			"Fighter" :
				[""],
			"Monk" :
				[""],
			"Paladin" :
				[""],
			"Priest" :
				[""],
			"Ranger" :
				[""],
			"Rogue" : 
				[""],
			"Wizard" : 
				[""]
		},
	}
};

let deadfire_data = {
	game_name : "deadfire",
	classes_to_roll : 4,
	companions_to_roll : 3,
	races_to_roll : 1,

	multiclass_chance : 100,
	multiclass_maxTotal : 4,
	multiclass_options_to_grant: 2,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : true,
	
	companion_options : ["Aloth", "Edér", "Maia", "Pallegina", "Serafen", "Tekehu", "Xoti", "Vatnir", "Ydwin", "Fassina", "Mirke", "Rekke", "Konstanten"],
	races_options : ["Aumaua", "Dwarf", "Elf", "Godlike", "Human", "Orlan"],
	character_options : {
		all_classes : {
			"Barbarian" : 
				["Berserker", 
				"Corpse-Eater", 
				"Mage Slayer", 
				"Fury Shaper"
				],
			"Chanter" :
				["Beckoner",
				"Skald",
				"Troubadour",
				"Bellower"
				],
			"Cipher" :
				["Ascendant",
				"Beguiler",
				"Soul Blade",
				"Psion"
				],
			"Druid" :
				["Fury",
				"Lifegiver",
				"Shifter",
				"Animist",
				"Ancient"
				],
			"Fighter" :
				["Black Jacket",
				"Devoted",
				"Unbroken",
				"Tactician"
				],
			"Monk" :
				["Helwalker",
				"Nalpazca",
				"Shattered Pillar",
				"Forbidden Fist"
				],
			"Paladin" :
				["Bleak Walkers",
				"Darcozzi Paladini",
				"Goldpact Knights",
				"Kind Wayfarers",
				"The Shieldbearers of St. Elcga",
				"The Steel Garrote"
				],
			"Priest" :
				["Berath",
				"Eothas",
				"Magran",
				"Skaen",
				"Wael",
				"Woedica"
				],
			"Ranger" :
				["Sharpshooter",
				"Ghost Heart",
				"Stalker",
				"Arcane Archer",
				],
			"Rogue" : 
				["Assassin", 
				"Streetfighter", 
				"Trickster", 
				"Debonaire",
				],
			"Wizard" : 
				["Arcanist", 
				"Sorcerer", 
				"Necromancer", 
				]
		},
	}
};

let kingmaker_data = {
	game_name : "kingmaker",
	classes_to_roll : 5,
	companions_to_roll : 4,
	races_to_roll : 1,

	multiclass_chance : 65,
	multiclass_maxTotal : 3,
	multiclass_options_to_grant: 4,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : true,
	
	companion_options : ["Amiri", "Jubilost", "Valerie", "Octavia", "Regongar", "Ekundayo", "Nok-Nok", "Harrim", "Tristian", "Jaethal", "Linzi", "Kalikke", "Kanerah"],
	races_options : ["Human", "Elf", "Dwarf", "Gnome", "Halfling", "Half-Elf", "Half-Orc", "Aasimar", "Tiefling"],
	character_options : {
		all_classes : {
			"Alchemist" : 
				["Chirurgeon", 
				"Grenadier", 
				"Vivisectionist"
				],
			"Barbarian" :
				["Armored Hulk",
				"Mad Dog",
				"Invulnerable Rager"
				],
			"Bard" :
				["Archaeologist",
				"Flame Dancer",
				"Thunder Caller"
				],
			"Cleric" :
				["Herald Caller",
				"Ecclesitheurge",
				"Crusader"
				],
			"Druid" :
				["Blight Druid",
				"Defender of the True World",
				"Feyspeaker"
				],
			"Fighter" :
				["Aldori Defender",
				"Tower Shield Specialist",
				"Two-Handed Fighter"
				],
			"Inquisitor" :
				["Sacred Huntsmaster",
				"Monster Tactitian ",
				"Tactical Leader"
				],
			"Kineticist" :
				["Dark Elementalist",
				"Psychokineticist",
				"Kinetic Knight"
				],
			"Magus" :
				["Eldritch Archer",
				"Eldritch Scion",
				"Sword Saint"
				],
			"Monk" : 
				["Scaled Fist", 
				"Sensei", 
				"Traditional Monk"
				],
			"Paladin" : 
				["Divine Hunter", 
				"Divine Guardian", 
				"Hospitaler" 
				],
			"Ranger" : 
				["Freebooter", 
				"Flamewarden", 
				"Stormwalker" 
				],
			"Rogue" : 
				["Eldritch Scoundrel", 
				"Knife Master", 
				"Thug" 
				],
			"Slayer" : 
				["Vanguard", 
				"Deliverer", 
				"Spawn Slayer" 
				],
			"Sorcerer" : 
				["Empyreal Sorcerer", 
				"Sage Sorcerer", 
				"Sylvan Sorcerer" 
				],
			"Wizard" : 
				["Scroll Savant", 
				"Arcane Bomber", 
				"Thassilonian Specialist" 
				]
		},
	}
};

let wrathoftherighteous_data = {
	game_name : "wrathoftherighteous",
	classes_to_roll : 5,
	companions_to_roll : 4,
	races_to_roll : 1,

	multiclass_chance : 65,
	multiclass_maxTotal : 3,
	multiclass_options_to_grant: 4,
	multiclass_selection_text: "~ Multiclass Options ~",
	
	has_subclasses : true,
	
	companion_options : ["Camellia", "Seelah", "Lann", "Ember", "Arueshalae", "Woljif", "Daeran", "Sosiel", "Regill", "Wenduag", "Nenio", "Greybor", "Ulbrig"],
	races_options : ["Human", "Elf", "Dwarf", "Gnome", "Halfling", "Half-Elf", "Half-Orc", "Aasimar", "Tiefling", "Oread", "Dhampir", "Kitsune"],
	character_options : {
		all_classes : {
			"Alchemist" : 
				["Chirurgeon", 
				"Grenadier", 
				"Vivisectionist",
				"Preservationist",
				"Metamorph",
				"Incense Synthesizer",
				"Reanimator"
				],
			"Arcanist" :
				["Brown-fur Transmuter",
				"Eldritch Font",
				"Unlettered Arcanist",
				"White Mage",
				"Nature Mage",
				"Phantasmal Mage",
				"Magic Deceiver"
				],
			"Barbarian" :
				["Armored Hulk",
				"Mad Dog",
				"Invulnerable Rager",
				"Beastkin Berserker",
				"Pack Rager",
				"Instinctual Warrior",
				"Flesheater"
				],
			"Bard" :
				["Archaeologist",
				"Flame Dancer",
				"Thunder Caller",
				"Tranquil Whisperer",
				"Dirge Bard",
				"Beast Tamer",
				"Chelaxian Diva"
				],
			"Bloodrager" :
				["Bloodrider",
				"Greenrager",
				"Primalist",
				"Spelleater",
				"Reformed Fiend",
				"Steelblood",
				"Mixed-Blood Rager",
				"Rag-Riven"
				],
			"Cavalier" :
				["Beast Rider",
				"Disciple of the Pike",
				"Knight of the Wall",
				"Gendarme",
				"Standard Bearer",
				"Fearsome Leader",
				"Cavalier of the Paw",
				"Ghost Rider"
				],
			"Cleric" :
				["Herald Caller",
				"Ecclesitheurge",
				"Crusader",
				"Demonbane Priest",
				"Angelfire Apostle",
				"Priest of Balance",
				"Separatist"
				],
			"Druid" :
				["Blight Druid",
				"Defender of the True World",
				"Feyspeaker",
				"Drovier",
				"Elemental Rampager",
				"Primal Druid",
				"Winter Child"
				],
			"Fighter" :
				["Aldori Defender",
				"Tower Shield Specialist",
				"Two-Handed Fighter",
				"Dragonheir Scion",
				"Armiger",
				"Mutation Warrior",
				"Titan Fighter"
				],
			"Hunter" :
				["Divine Hunter - Hunter",
				"Urban Hunter",
				"Colluding Scoundrel",
				"Forester",
				"Wandering Marksman",
				"Divine Hound",
				"Tandem Executioner"
				],
			"Inquisitor" :
				["Sacred Huntsmaster",
				"Monster Tactitian ",
				"Tactical Leader",
				"Faith Hunter",
				"Sanctified Slayer",
				"Judge",
				"Living Grimoire"
				],
			"Kineticist" :
				["Dark Elementalist",
				"Psychokineticist",
				"Kinetic Knight",
				"Blood Kineticist",
				"Overwhelming Sould",
				"Elemental Engine",
				"Kinetic Sharpshooter"
				],
			"Magus" :
				["Eldritch Archer",
				"Eldritch Scion",
				"Sword Saint",
				"Hexcrafter",
				"Armored Battlemage",
				"Arcane Rider",
				"Spell Dancer",
				"Bladebound"
				],
			"Monk" : 
				["Scaled Fist", 
				"Sensei", 
				"Traditional Monk",
				"Zen Archer",
				"Sohei",
				"Quarterstaff Master",
				"Student of Stone",
				"Drunken Master"
				],
			"Oracle" :
				["Lone Strider",
				"Enlightened Philosopher",
				"Divine Herbalist",
				"Seeker",
				"Possessed Oracle",
				"Purifier",
				"Wind Whisperer",
				"Dual-Cursed Oracle"
				],
			"Paladin" : 
				["Divine Hunter", 
				"Divine Guardian", 
				"Hospitaler",
				"Warrior of the Holy Light",
				"Martyr",
				"Divine Scion",
				"Stonelord",
				"Tortured Crusader" 
				],
			"Ranger" : 
				["Freebooter", 
				"Flamewarden", 
				"Stormwalker",
				"Espionage Expert",
				"Demonslayer",
				"Nomad",
				"Sable Company Marine" 
				],
			"Rogue" : 
				["Eldritch Scoundrel", 
				"Knife Master", 
				"Thug",
				"Sylvan Trickster",
				"Underground Chemist",
				"Rowdy",
				"Master of All",
				"Dark Lurker"
				],
			"Shaman" :
				["Possessed Shaman",
				"Spirit Hunter",
				"Spirit Warden",
				"Unsworn Shaman",
				"Witch Doctor",
				"Wildland Shaman",
				"Shadow Shaman",
				"Prophet of Pestilence"
				],
			"Shifter" :
				["Child of Manticore",
				"Dragonblood Shifter",
				"Feyform Shifter",
				"Fiendflesh Shifter",
				"Rageshaper",
				"Wild Effigy",
				"Weretouched"
				],
			"Skald" :
				["Battle Scion",
				"Court Poet",
				"Demon Dancer",
				"Herald of the Horn",
				"Hunt Caller",
				"Battle Singer",
				"Inciter"
				],
			"Slayer" : 
				["Vanguard", 
				"Deliverer", 
				"Spawn Slayer",
				"Arcane Enforcer",
				"Executioner",
				"Stygian Slayer",
				"Imitator",
				"Bloodseeker"
				],
			"Sorcerer" : 
				["Empyreal Sorcerer", 
				"Sage Sorcerer", 
				"Sylvan Sorcerer",
				"Crossblooded",
				"Seeker - Sorcerer",
				"Nine Tailed Heir",
				"Overwhelming Mage",
				"Geomancer" 
				],
			"Warpriest" :
				["Cult Leader",
				"Feral Champion",
				"Disenchanter",
				"Shieldbearer",
				"Proclaimer",
				"Champion of the Faith",
				"Mantis Zealot"
				],
			"Witch" :
				["Stigmatized Witch",
				"Hagbound",
				"Hex Channeler",
				"Ley Line Guardian",
				"Elemental Witch",
				"Witch of the Veil",
				"Hag of Gyronna"
				],
			"Wizard" : 
				["Scroll Savant", 
				"Arcane Bomber", 
				"Thassilonian Specialist",
				"Exploiter Wizard",
				"Elemental Specialist",
				"Spell Master",
				"Cruoromancer",
				"Shadowcaster" 
				]
		},
	}
};


const games_array = [bg3_data, sunderfolk_data, solasta_data, roguetrader_data, pillars1_data, deadfire_data, kingmaker_data, wrathoftherighteous_data];
