
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
          var minutes = convertHourstoMinute(request.time)
          var reminder = request.reminder
          console.log(minutes)

          setAlarm(minutes, reminder)
    }

  )

  function convertHourstoMinute(schTime) {
    return Math.floor(schTime * 60);
  }

chrome.alarms.onAlarm.addListener((alarm) => {
 
  chrome.storage.local.get(alarm.name, (result) => {
    var reminder = result[alarm.name] || "No title"; 
    //let randomNum = Math.random();
    //let name = reminder + randomNum

    chrome.notifications.create(
      reminder,
      {
        type: "basic",
        iconUrl: "magic-line.png",
        title: "Here's a reminder:",
        message: reminder,
        silent: false,
      },
      () => {}
    );

    chrome.storage.local.get(alarm.name, (result) => {
      if (result[alarm.name]) {

          chrome.storage.local.remove(alarm.name, () => {
              if (chrome.runtime.lastError) {
                  console.error(`Error removing ${alarm.name}:`, chrome.runtime.lastError);
              } else {
                  console.log(`${alarm.name} has been removed from local storage.`);
              }
          });
      } else {
          console.log(`${alarm.name} does not exist in local storage.`);
      }
  });
  
  });
});

function setAlarm(minutes, reminder) {
  var alarmName = `${reminder}_${Date.now()}`;

  chrome.storage.local.set({ [alarmName]: reminder }, () => {
    console.log(`Reminder "${reminder}" stored for alarm "${alarmName}"`);
  });

  chrome.alarms.create(alarmName, {
    delayInMinutes: minutes,
  });
}

