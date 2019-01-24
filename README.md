# FitbitGoogleAnalytics-Studio
Fitbit Studio version of a demo app for the [Fitbit Google Analytics Lib](https://github.com/dillpixel/fitbit-google-analytics) by dillpixel.

***Note**: Using Google Analytics in your app may violate GDPR or other privacy laws. Always consult with a professional for legal advice when implementing code that tracks behavior and logs user data.*


Using additional parameters: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters

### To set 'custom dimensions' ###

Go to google analytics admin console. Then select your app -> Custom Dimensions

You can set the name in here to anything you want. What really matters in the `index` number.
    The defaults in this are as follows; `Device Model`, `Gender`, `User Age`, `Phone OS`

    I noticed that using Google Data Studio was the easiest way to make custom reports. 
    Link: https://datastudio.google.com/navigation/reporting

    You have to play around with it a little but this is how I have mine set up.

    