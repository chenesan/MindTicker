function sprintf( format )
{
  for( var i=1; i < arguments.length; i++ ) {
    format = format.replace( /%s/, arguments[i] );
  }
  return format;
}

function changetime(){
    chrome.runtime.sendMessage("ResetTimer");
}

function getalarmperiodandshow()
{
    chrome.storage.local.get("alarmperiod",function(val){
	console.log(val.alarmperiod.toString());
	document.getElementById("timerdescription").innerHTML=sprintf(
	    chrome.i18n.getMessage("BrowserActionText"),
	    val.alarmperiod.toString()
	);
    });
}

getalarmperiodandshow();
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if("alarmperiod" in changes) {
	getalarmperiodandshow();
    }
});
document.getElementById("timersettingbutton").innerHTML=chrome.i18n.getMessage("TimerSettingButtonText");
document.getElementById("timersettingbutton").addEventListener("click",changetime);

