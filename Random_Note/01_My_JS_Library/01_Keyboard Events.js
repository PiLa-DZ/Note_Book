document.onkeydown = function (e) {
	if (e.keyCode == 38) player.direction = 'up' 
	if (e.keyCode == 40) player.direction = 'down' 
	if (e.keyCode == 39) player.direction = 'left'
	if (e.keyCode == 37) player.direction = 'right'
};
