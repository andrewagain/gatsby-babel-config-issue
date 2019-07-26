# Gatsby Babel Config Issue

Starting in Gatsby 2.13.28, `babel.config.js` can no longer be used.

## Repro

Clone this repo, then:

```
yarn develop
```

You will NOT see the console.log line printed by `babel.config.js`.


## Workaround

Downgrading to Gatsby 2.13.28 fixes the issue:

```
yarn add gatsby@2.13.28
yarn develop
```

You will see the "babel.config.js is being used" log line printed out.
