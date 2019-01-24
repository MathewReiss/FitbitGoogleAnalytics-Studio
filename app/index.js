/*
 * Entry point for the watch app
 */
import document from "document"
import analytics from "./analytics/app"
import { me as device } from "device"
import { user } from "user-profile"

let demotext = document.getElementById("demotext")
demotext.text = "Fitbit Studio rocks!"

analytics.configure({
  tracking_id: "UA-XXXXXXXXX-1",
  sr: device.screen.width + "x" + device.screen.height,
  an: "Simply Tungsten",
  custom_dimensions: [
    {index: 1, value: device.modelName},
    {index: 2, value: user.gender},
    {index: 3, value: user.age},
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