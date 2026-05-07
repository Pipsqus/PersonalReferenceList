// const games_array = ["bg3", "sunderfolk", "solasta"...];
const game_container_div = document.getElementsByClassName("game_list")[0];

games_array.forEach(function(game) {
	const button = document.createElement("button");
	button.id = game;

	const img = document.createElement("img");
	img.src = `game_icon/${game}.jpg`;
	
	button.addEventListener("click", function(button) {
			let game_data_object = this.id + "_data";
			let game_button = document.getElementById(this.id);
			generate_random_party(eval(game_data_object), this)
	});

	button.appendChild(img);
	game_container_div.appendChild(button);
});
