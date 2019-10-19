var firstname1;
var realweight1;
var idealweight1;
var age1;

function formdata() {
	//Getting the values from the user
	firstname1 = document.getElementById('firstname').value;
	realweight1 = document.getElementById('realweight').value;
	idealweight1 = document.getElementById('idealweight').value;
	age1 = document.getElementById('age').value;
	console.log('first ==' + firstname1);

	firstname1 = 'dwafa';
	//Chechking to see if the user is the right age
	if (age1 < 17) {
		alert(firstname1 + ' you are too young for this');
	}

	if (age1 > 22) {
		alert(firstname1 + ' you are too old for this');
	}
}

console.log('second ==' + firstname1);
function myFunction() {
	console.log('third ==' + firstname1);
	document.getElementById('myText').innerHTML = firstname1;
}
