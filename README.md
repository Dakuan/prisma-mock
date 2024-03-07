# Setup

* make sure a postgres instance is running
* create .env file
* add DATABASE_URL='$YOUR_POSTGRES' to the .env


# Test

``` bash
npm run test
```

Verify that jest mocks are working in `greeter.spec.ts` but not in `user.spec.ts`