// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:4000/api',
  // api_url: 'https://concastor-reviews-api.azurewebsites.net/api',

  firebaseConfig: {
    apiKey: 'AIzaSyAXlEdB7jy5B-1FDHFXMRpupTMMTR0HdiA',
    authDomain: 'concastor-reviews-2a6db.firebaseapp.com',
    projectId: 'concastor-reviews-2a6db',
    storageBucket: 'concastor-reviews-2a6db.appspot.com',
    messagingSenderId: '513796768958',
    appId: '1:513796768958:web:bdf7b609ab5a42c2354aef',
    measurementId: 'G-48F7J4ZDFR',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
