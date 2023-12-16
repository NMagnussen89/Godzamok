setInterval(function() {
	if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') {
			Game.tickerL.click();
	}
	
	if
	(
		!Game.hasBuff('Devastation').visible == true
		&&
		Game.hasBuff('Frenzy').visible == true
		&&
		(
			Game.hasBuff('Elder frenzy').visible == true || 
			Game.hasBuff('Click frenzy'.visible == true) || 
			Game.hasBuff('Dragonflight').visible == true
		)
		&&
		(
			Game.hasBuff('High-five').visible == true || 
			Game.hasBuff('Congregation').visible == truev || 
			Game.hasBuff('Luxuriant harvest').visible == true || 
			Game.hasBuff('Ore vein').visible == true || 
			Game.hasBuff('Oiled-up').visible == true || 
			Game.hasBuff('Juicy profits').visible == true || 
			Game.hasBuff('Fervent adoration').visible == true || 
			Game.hasBuff('Manabloom').visible == true || 
			Game.hasBuff('Delicious lifeforms').visible == true || 
			Game.hasBuff('Breakthrough').visible == true || 
			Game.hasBuff('Righteous cataclysm').visible == true || 
			Game.hasBuff('Golden ages').visible == true || 
			Game.hasBuff('Extra cycles').visible == true || 
			Game.hasBuff('Solar flare').visible == true || 
			Game.hasBuff('Winning streak').visible == true || 
			Game.hasBuff('Macrocosm').visible == true || 
			Game.hasBuff('Refactoring').visible == true || 
			Game.hasBuff('Cosmic nursery').visible == true
		)
	) {
		sellAndRebuy();
	}
}, 100)

function sellAndRebuy() {
	var buildings = [0, 2, 3, 4, 5, 6];

	buildings.forEach((building, index) => {
		var currentAmount = Game.ObjectsById[buildings[index]].amount;

		if (currentAmount >= 100) {
			var bulk = parseInt(currentAmount / 100);

			if (bulk > 6) {
				bulk = 6;
			}
			
			l('storeBulkSell').click();
			l('storeBulk100').click();
			
			for (var i = 0; i < bulk; i++) {
				Game.ObjectsById[buildings[index]].sell;
			}
			
			l('storeBulkBuy').click();
			l('storeBulk100').click();
			
			for (var i = 0; i < bulk; i++) {
				Game.ObjectsById[buildings[index]].buy;
			}
		}
	});
}
