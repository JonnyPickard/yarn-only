#!/usr/bin/env node
'use strict';

const chalk = require('chalk');

/**
 * Do NOT allow using `npm` as package manager.
 */
if (process.env.npm_execpath.indexOf('yarn') === -1) {
  console.error(
    chalk.red(`
                        !! WARNING!! 
    
    Please use Yarn to install dependencies instead of NPM.
    
    ${chalk.cyan('To install please run $ yarn or $ yarn install')}
  `)
  );
  process.exit(1);
}
