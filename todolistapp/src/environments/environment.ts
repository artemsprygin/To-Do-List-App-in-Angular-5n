// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
      apiKey: "AIzaSyA9Onr1bEEaMNXpTVl7Z3Bfva9fCxlpeH8",
      authDomain: "myapp-6221b.firebaseapp.com",
      databaseURL: "https://myapp-6221b.firebaseio.com",
      projectId: "myapp-6221b",
      storageBucket: "myapp-6221b.appspot.com",
      messagingSenderId: "739574817895"
  }
};
