var desiredNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var recordedNumber = [];
var currentTime = 0;
function anything() {
	var a = arrayfromargs(messagename, arguments);
	var command  = a[0];
	var value = a[1];
	if (command == "time") {
		currentTime = value;
		post("currentTime: " + currentTime + "\n");
		if (currentTime == "9") {
			post("clear\n");
			for (var i = 0; i < 9; i ++) {
				if (recordedNumber[i] != desiredNumber[i]) {
					break;
				}
				outlet(0, 1);
			}
			recordedNumber = [];
		}
	} else if (command == "value") {
		recordedNumber[currentTime - 1] = value;
		post(recordedNumber + "\n");
	}
}
