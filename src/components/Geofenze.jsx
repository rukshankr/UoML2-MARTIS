//import React from 'react';
import BackgroundGeolocation from '@ionic-native/background-geolocation';


BackgroundGeolocation.addGeofences([{
    identifier: "Home",
    radius: 200,
    latitude: 45.51921926,
    longitude: -73.61678581,
    notifyOnEntry: true,
  }, {
    identifier: "Work",
    radius: 200,
    latitude: 45.61921927,
    longitude: -73.71678582,
    notifyOnEntry: true
  }]).then((success) => {
    console.log("[addGeofences] success");
  }).catch((error) => {
    console.log("[addGeofences] FAILURE: ", error);
  });
  
  
//////////////////Listining to events//////////
BackgroundGeolocation.onGeofence(geofence => {
    console.log("[geofence] ", geofence.identifier, geofence.action);
  });
  ///////////Listining to changes in actively monitored geofences////////////////
  