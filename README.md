# REMIND ME
#### Video Demo:  https://youtu.be/bB7FkAMoWYM
#### Description:

Remind me is a simple google extension that reminds you of simple tasks that you should do right now but are to lazy to do so, or maybe you don't have to do them right away so you can schedule a reminder to do it later, right?

Using it is so simple, just write down what you want your reminder to say and schedule the time, it'll remind you!

project files:
-back.js:
Javascript file where all of the listeners are, here, after getting the variables of your reminder and the scheduled time, we create the alarm and notfication for it to show up at the time the user selected, i debated whether using a time picker or a dropdown with fixed times(spoiler, this one was used!), I tried to implement the first one but after using it a couple of days I realized that it was too much clicking for a simple reminder, and i'd rather not think much about the exact time i want my notification to pop up, it's easier to just click: remind me in 1 hour.

So I implemented the latter and honestly, it was way simpler than the first one, since for using a specific hour and minutes I had to create a function that converted the hours to minutes and added the minutes set by the user, but if I used fixed hours like 1,4,6 or 12, the conversion was much easier since it's only the hour*60.

Another design choice i made was to fix an error that was happening when setting a reminder, so you used the chrome extension, you set it to a minute but it reminded you twice or if you put to different reminders one after the other the message would be overwritten and you would get the same reminder twice, losing the first reminder.

This was happening because I was not using unique identifiers for the reminders, at first i was only using what was written by the user, if the user wrote 'sleep' or 'eat' or 'feed the cat' that would be the name of my notification and alarm, to fix this problem I at first I used Math.random() to generate a random number and concatenate it to the name of the reminder, this was later changed to Date.now() because I think it's more functional since it can be used later for storing the date of the reminder if this chrome extension ever gets an update where you can see all of the reminders set by the user. ;)

-done.html
Simple html for when you click the remind me! button.

-magic-line.png
Remind me Icon

-manifest.json
Here's the manifest, this file basically tells chrome where everything is, also how it's going to look in the final user browser because you set the name, descriptio and icon here also where the index and service worker are.

-popup.html
index page, what you see first when you click on the chrome extension.

-popup.js
'Backend' for popup.html, here I handle the variables and if everything is correct I call back.js where the magic happens.

-README.md
You are reading it right now :D

-style.css
Stylesheet for remind me.

Remind me is meant to be very easy to use, that's why I discarded the initial idea of setting the reminder to an specific time and using fixed times instead, visually I added gentle colors, that can be comfortable to look at even at night and I also added visual cues to help the user through the process, even if it's so simple. For example, when you click on the remind me... input field, the outline changes color so you can easily identify that you can write now, if you click on the remind me! button and you haven't written what you'd like to be reminded of, a label will appear telling you to write something down. This ensures that there will be no errors and my simple app is even simpler to use.
