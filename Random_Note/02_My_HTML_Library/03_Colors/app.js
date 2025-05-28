let continer = document.getElementsByClassName('continer')
let divs = document.getElementsByClassName('divs')
// #051930

let colors = [
	'#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
	'#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
	'#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6',
	'#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'
]

colors.forEach((e, i) => {
	divs[i].style.background = e
	divs[i].attributes.color.value = e
	// divs[i].textContent = e


	divs[i].onclick = function() {
		document.execCommand("copy")
		// continer[0].style.display = 'none'
		document.body.style.background = e
		// setTimeout( () => { continer[0].style.display = 'block' }, 200)
		setTimeout( () => { document.body.style.background = '#051930' }, 2000)
	}

	divs[i].addEventListener("copy", function(event) {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData("text/plain", divs[i].attributes.color.value);

			console.log(event.clipboardData.getData("text"))
		}
	})

})
