import Realm from 'realm';

let app;

export function getRealmApp() {
  if (app === undefined) {
    const appId = '<App_ID>'; //your app id
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: '<App_Name>', //your app name
        version: '0',
      },
    };
    app = new Realm.App(appConfig);
  }
  return app;
}
