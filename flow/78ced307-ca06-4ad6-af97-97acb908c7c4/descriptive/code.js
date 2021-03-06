// Auto update ”ACE” Cave
Settings.CommandRetries = 9;
Settings.CommandRetryDelays = [50, 100, 150, 200, 400, 800, 1600];

Flow.run("Cave function - Initiation", {Prep: "Ace"});

var ErrMsg = "";
var Err = 0;

var medications = [ 
  {Middel: "Captopril", ATC: "C09AA01", ATCshort: "C09AA", Mtype: "Farmakologisk gruppe"},
  {Middel: "Corodil", ATC: "C09BA02", ATCshort: "C09BA", Mtype: "Farmakologisk gruppe"}
];

for (var i = 0; i < medications.length; i++) {
  var r = Flow.run("Cave function - Update medication", medications[i]);
	if (r.result != "0") {
      ErrMsg = ErrMsg + "\n" + r.result;
	Err = 1;
	}
}

Flow.run("Cave function - Completion", {IErr: Err, IErrMsg: ErrMsg});