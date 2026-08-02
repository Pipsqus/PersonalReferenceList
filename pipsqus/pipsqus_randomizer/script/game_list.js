// const games_array = ["bg3", "sunderfolk", "solasta"...];
const game_container_div = document.getElementsByClassName("game_list")[0];

games_array.forEach(function(game) {
	const button = document.createElement("button");
	button.id = game.game_name;
	button.classList.add("game_button");
	
	const img = document.createElement("img");
	img.src = `game_icon/` + `${game.game_name}` + `.jpg`;
	
	button.addEventListener("click", function(button) {
			run_randomization_function(game, this);
			let game_list_div = document.getElementsByClassName("game_list")[0].children;
			for (let i=0; i < game_list_div.length; i++) {
				if (this.id != game_list_div[i].id &! game_list_div[i].classList.contains("party_container")) {
					game_list_div[i].classList.add("hidden");
				}
			};
	});

	button.appendChild(img);
	game_container_div.appendChild(button);
});
