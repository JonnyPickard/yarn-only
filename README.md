# Yarn Only

Simple module to prevent user from running a full install with anything apart from yarn. E.g. the command: `npm install`

!! Warning !! Due to the way the `preinstall` script works individual modules may still be installed with the `npm install <module name>` command. Which may result in files being generated like a `package-lock.json` file.

## Usage

1. `yarn add yarn-only`

2. Add the following to your `package.json`:

```json
"scripts": {
  "preinstall": "yarn-only"
}
```