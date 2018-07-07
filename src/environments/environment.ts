// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDIqGnrv-p0FN65MOwbqBNQuY1AMZ4SLO4',
    authDomain: 'possum-cam.firebaseapp.com',
    databaseURL: 'https://possum-cam.firebaseio.com',
    projectId: 'possum-cam',
    storageBucket: 'possum-cam.appspot.com',
    messagingSenderId: '250014985953'
  }
};
