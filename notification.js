var opt = {
    type: "basic",
    title: chrome.i18n.getMessage("GoalNotificationTitle"),
    message: "",
    iconUrl: "img/goal.png"
};

function msgcallback(msg, sender, sendresponse){
    if( msg == "NotificationRequest"){
	chrome.storage.local.get("goal",function(val){
	    console.log(val.goal);
	    opt.message = val.goal;
	    chrome.notifications.create("",opt,function(id){});
	});
    }
}

chrome.runtime.onMessage.addListener(msgcallback);
