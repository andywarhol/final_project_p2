

const element = document.getElementById("setAlarm")
element.addEventListener("click", () => {
  console.log(element)
  const reminderText = document.getElementById('reminderText').value;
  //const reminderTime = document.getElementById('reminderTime').value;
  const reminderEmpty = document.getElementById("reminderEmpty");
  const hours = document.getElementById("hours").value;
  
  if (reminderText.length == 0){
    reminderEmpty.innerHTML = "I don't know what to remind you!";
  
  } else {
    console.log(reminderText)
    console.log(hours)
    reminderEmpty.innerHTML = "";
    chrome.runtime.sendMessage({time:hours, reminder:reminderText}, function(response){});
    window.location.href = 'done.html';
  }
 
})
