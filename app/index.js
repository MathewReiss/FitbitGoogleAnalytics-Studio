/*
 * Entry point for the watch app
 */
import document from "document"
import analytics from "./analytics/app"
import { me as device } from "device"
import { user } from "user-profile"

import { me } from "appbit";

let userGender;
var userAge;


if (!me.permissions.granted("access_user_profile")) {
  console.log("We're not allowed to read a users' profile");
  var userGender = "UNK";
  var userAge = "UNK";
}
else {
  var userGender = user.gender;
  var userAge = user.age;
}

let demotext = document.getElementById("demotext")
demotext.text = "Fitbit Studio rocks!"

analytics.configure({
  tracking_id: "UA-XXXXXXXXX-1",
  sr: device.screen.width + "x" + device.screen.height,
  an: "Your_App_Name", //The Ionic does not like spaces in the file name
  custom_dimensions: [
    {index: 1, value: device.modelName},
    {index: 2, value: userGender},
    {index: 3, value: userAge},
  ],
})

/*
let overlay = document.getElementById("touch-overlay")
overlay.onclick = (e) => {
  analytics.send({
    hit_type: "event",
    event_category: "Screen Tap",
    event_action: e.screenX + ", " + e.screenY,
    event_label: e.screenX + ", " + e.screenY
  })
}
*/

import { memory } from "system";
console.log("JS memory: " + memory.js.used + "/" + memory.js.total);
