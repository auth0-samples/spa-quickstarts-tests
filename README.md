# SPA Web Automation On CircleCI

A set of scripts that run over [CodeceptJS](https://codecept.io) against a Single Page Application (SPA) and attempt to test the "Log in" behavior with Lock in the Universal Login.

This scripts are being used on some of the Auth0 SPA Quickstart samples repositories CI builds to verify the code introduced to the project.

### How to Run them
A simple CodeceptJS test is located in the `lock_login_test.js` file. To run them against a running SPA first install the CodeceptJS package.

```sh
npm install
```

Tests run by issuing `npm test` or 

```sh
./node_modules/.bin/codeceptjs run-multiple --all
```

Failing tests will produce a screenshot for debugging purposes under the `out` folder.


### Configuration
The SPA is expected to be running on `https://localhost:3000`. Change this URL by setting an environment variable named `WEBAPP_URL` or use localhost with a different port by setting `SAMPLE_PORT`.

Detailed configuration can be found and changed in the `codecept.conf.js` file. 