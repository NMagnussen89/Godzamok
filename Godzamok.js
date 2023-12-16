setInterval(function() {
	if
	(Game.TickerEffect && Game.TickerEffect.type == 'fortune') {
			Game.tickerL.click();
	}
	
	if
	(
		!Game.hasBuff('Devastation')
		&&
		Game.hasBuff('Frenzy')
		&&
		(
			Game.hasBuff('Elder Frenzy') || 
			Game.hasBuff('Click Frenzy') || 
			Game.hasBuff('Dragonflight')
		)
		&&
		(
			Game.hasBuff('High-five') || 
			Game.hasBuff('Congregation') || 
			Game.hasBuff('Luxuriant harvest') || 
			Game.hasBuff('Ore vein') || 
			Game.hasBuff('Oiled-up') || 
			Game.hasBuff('Juicy profits') || 
			Game.hasBuff('Fervent adoration') || 
			Game.hasBuff('Manabloom') || 
			Game.hasBuff('Delicious lifeforms') || 
			Game.hasBuff('Breakthrough') || 
			Game.hasBuff('Righteous cataclysm') || 
			Game.hasBuff('Golden ages') || 
			Game.hasBuff('Extra cycles') || 
			Game.hasBuff('Solar flare') || 
			Game.hasBuff('Winning streak') || 
			Game.hasBuff('Macrocosm') || 
			Game.hasBuff('Refactoring') || 
			Game.hasBuff('Cosmic nursery')
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
