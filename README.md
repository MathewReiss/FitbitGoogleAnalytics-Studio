# FitbitGoogleAnalytics-Studio
Fitbit Studio version of a demo app for the [Fitbit Google Analytics Lib](https://github.com/dillpixel/fitbit-google-analytics) by dillpixel.

***Note**: Using Google Analytics in your app may violate GDPR or other privacy laws. Always consult with a professional for legal advice when implementing code that tracks behavior and logs user data.*


Using additional parameters: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters

-----------

## To set 'custom dimensions' ##

1. Go to google analytics admin console. Then select your app -> Custom Dimensions

    - You can set the name to anything you want. What really matters in the `index` number.
    ***Note:*** The defaults in this are as follows: `Device Model`, `Gender`, `User Age`, `Phone OS`.
    
   
![Custom Dimensions](https://drive.google.com/file/d/1qw-1PRfSv-z4O48SNX7BNTULPyFqi0N7/preview)

-----------

I noticed that using Google Data Studio was the easiest way to make custom reports. 

- Link: https://datastudio.google.com/navigation/reporting


You'll have to play around with it a little but this is how I have mine set up.

  ![Studio Setup](https://drive.google.com/file/d/1qDCB9Xhu1_g4pWkNpsUEk9lQ7WlmiwgD/preview)
