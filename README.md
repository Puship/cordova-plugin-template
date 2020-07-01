# Puship Notifications Plugin for Android and iOS

---

## DESCRIPTION

This plugin is for use with [Puship.com](https://www.puship.com), it's quickly enable support for Push Notifications on cordova and phonegap applications.

Is based on [phonegap-plugin-push](https://github.com/phonegap/phonegap-plugin-push) plugin and add only few resources for manage remote push notifications on Puship server(s):
1) one javascript library
2) many sounds
3) plugin dependencies: - [cordova-plugin-device](https://github.com/apache/cordova-plugin-device)
						- [cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)
						- [phonegap-plugin-push](https://github.com/phonegap/phonegap-plugin-push)



**Important** - Push notifications are intended for real devices. The registration process will fail on the iOS simulator. Notifications can be made to work on the Android Emulator, however doing so requires installation of some helper libraries.


## Installation

Normally it is sufficient to add the plugin as indicated below, but if you have special needs you can first manually install the phonegap-plugin-push and configure it as spelled at the [following link](https://github.com/phonegap/phonegap-plugin-push/blob/master/README.md), and then resume from here. Since the phonegap-plugin-push is already installed it will not be installed again.


### Cordova

The plugin can be installed via the Cordova command line interface:

1) Navigate to the root folder for your cordova project. 2) Run the command.

```sh
cordova plugin add https://github.com/Puship/PushPlugin.git
```

### Phonegap

The plugin can be installed using the Phonegap command line interface:

1) Navigate to the root folder for your phonegap project. 2) Run the command.

```sh
phonegap local plugin add https://github.com/Puship/PushPlugin.git
```

## How to activate

Go to [Puship.com](https://www.puship.com) and create your Free account. Configure your application from dashboard an then add highlighted code to your index.js:


```diff
#	onDeviceReady: function() {
#        this.receivedEvent('deviceready');
#		
#		push = PushNotification.init({
#			android: {
#			},
#			browser: {
#				pushServiceURL: 'http://push.api.phonegap.com/v1/push'
#			},
#			ios: {
#				alert: "true",
#				badge: "true",
#				sound: "true"
#			},
#			windows: {}
#		});
#		
#		push.on('registration', (data) => {
+			var appCode = "YOUR-PUSHIP-APP-CODE"; // I.E.: puship_id = "h1mCVGaP9dtGnwG"
+			Puship.Register(data.registrationId, appCode);
#		});
#
#		push.on('notification', (data) => {
+			alert(JSON.stringify(data));
#			// data.message,
#			// data.title,
#			// data.count,
#			// data.sound,
#			// data.image,
#			// data.additionalData
#		});
#
#		push.on('error', (e) => {
#			alert(e.message);
#		});
#		
#    }
```

Then run your app and start send push notifications!

...and yes, this is lovely all!

## Other tips

1) at this link you can find a [complete example](https://github.com/Puship/phonegap-puship-start) that use all library methods
2) a this link you can find official [library documentation](https://www.puship.com/documentation/common-library-documentation/)
