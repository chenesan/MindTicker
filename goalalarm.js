var initalarmname=Date.now().toString();
var initalarmperiod=1;

function sprintf(format)
{
    for( var i=1; i < arguments.length; i++ ) {
	format = format.replace( /%s/, arguments[i] );
    }
    return format;
}

function getgoalandinitalarm(){
    do{
	var goal=prompt(chrome.i18n.getMessage("StartupGoalRequire"),"");
    }while(goal==null || goal=="");
    
    chrome.storage.local.set({'goal':goal},function(){
	chrome.runtime.sendMessage("NotificationRequest");
	chrome.alarms.clearAll();
	chrome.storage.local.set({"alarmname":initalarmname,"alarmperiod":initalarmperiod},function(){
	    chrome.alarms.onAlarm.addListener(alarmlistener);
	    chrome.alarms.create(initalarmname,{periodInMinutes:initalarmperiod});
	});	
    });
}


function alarmlistener(alarm){
    chrome.storage.local.get("alarmname",function(val){
	if(alarm.name==val.alarmname){	
	    chrome.storage.local.get("goal",function(val){
		var newgoal=prompt(chrome.i18n.getMessage("MiddleGoalRequire"),"");
		if(newgoal!=val.goal){
		    var goalchange=confirm( sprintf(chrome.i18n.getMessage("GoalDiffCheck"),val.goal,newgoal));
		    if(goalchange==false){
			chrome.tabs.getSelected(function(tab) {chrome.tabs.remove(tab.id, function(){});});
			newgoal = val.goal;
		    }
		}
		chrome.storage.local.set({"goal":newgoal},function(){
		    chrome.runtime.sendMessage("NotificationRequest");});
	    });
	}
    });
}

function resetalarmmsgcallback(msg, sender, sendresponse)
{
    if(msg=="ResetTimer"){
	do{
            var newperiod=prompt(chrome.i18n.getMessage("TimerSettingPrompt"),"20");
	}while(isNaN(newperiod));

	chrome.storage.local.set({"alarmperiod":parseInt(newperiod)},function(){
            chrome.alarms.clearAll();
	    console.log('newperiod'+newperiod);
	    chrome.storage.local.get("alarmname",function(val){
		chrome.alarms.create(val.alarmname,{periodInMinutes:parseInt(newperiod)});
	    });
	});
    }
}
    
chrome.runtime.onStartup.addListener(getgoalandinitalarm);
chrome.runtime.onMessage.addListener(resetalarmmsgcallback);

