var recordedKey = {};

var expectedKey = [106, 107, 108];
var expecedKeySet = {106: true, 107: true, 108: true}
function list() {
	var input = arrayfromargs(arguments);
	
	if (input[1] > 0) {
		recordedKey[input[0]] = true;
	} else {
		recordedKey[input[0]] = false;
	}
	
	for (var i = 0; i < expectedKey.length; i ++) {
		if (recordedKey[expectedKey[i]] == false) {
			post("no " + expectedKey[i]);
			return;
		}
	}
	
	for (var i = 21; i < 109; i ++) {
		if (recordedKey[i] == true) {
			if (expecedKeySet[i] == false) {
				return;
			}
			
			if (expecedKeySet[i] == null) {
				return;
			}
		}
	}
	outlet(0, 1);
	post("bang");
}	