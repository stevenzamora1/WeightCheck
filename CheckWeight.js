function formdata() {
	var firstname1 = document.getElementById('firstname').value;
	var weight1 = document.getElementById('weight').value;
	var height1 = document.getElementById('height').value;
	var age = document.getElementById('age').value;

	if (age < 17) {
		alert(firstname1 + ' you are too young for this');
	}

	if (age > 22) {
		alert(firstname1 + ' you are too old for this');
	}

	alert(firstname1);
}
