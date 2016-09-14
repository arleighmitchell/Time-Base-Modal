var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementById('mySpan');

function myFunction() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

