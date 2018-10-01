// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//export const environment = {
//  production: false
//};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCFS2muou-Q9H0i6XhOHexkfz5gA68uKCU",
    authDomain: "tutorapp-4151b.firebaseapp.com",
    databaseURL: "https://tutorapp-4151b.firebaseio.com",
    projectId: "tutorapp-4151b",
    storageBucket: "tutorapp-4151b.appspot.com",
    messagingSenderId: "720033381663"
  }
};
